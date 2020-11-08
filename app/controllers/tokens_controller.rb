class TokensController < ApplicationController
    before_action :authorize_request
    before_action :check_admin, except: %i[create update]
    before_action :find_user, except: %i[index delete create]
    before_action :find_token, except: %i[index create]
  
    # GET /tokens
    def index
      @tokens = Token.all
      render json: TokenSerializer.new(@tokens), status: :ok
    end
    
    # POST /tokens
    def create
        if @current_user.no_of_tokens != 0
            @token = Token.new({token: (0...10).map { (48 + rand(10)).chr }.join, user_id: @current_user.id, value: 10, expires: Time.now + 1.week.to_i})
            if @token.save
                @current_user.update({no_of_tokens: @current_user.no_of_tokens - 1})
                Log.new({user_id: @current_user.id, action: "created token"}).save  
                render json: TokenSerializer.new(@token), status: :created
            else
                render json: { errors: @current_user.errors.full_messages },
                       status: :unprocessable_entity
            end
        else  
            render json: { errors: "You do not have permission to create new tokens"}, status: :method_not_allowed
         end
    end
  
    # PUT /tokens/{username}
    def update
        if @current_user == @user && @token.user_id == @user.id
            if @token.expires > Time.now
                @user.update({balance: @user.balance + @token.value})
                Log.new({user_id: @current_user.id, action: "used token"}).save
                @token.destroy
                render json: UserSerializer.new(@user, {include: %i[tokens]}), status: :ok
            else
                @token.destroy
                render json: { errors: "Token has expired"}, status: :method_not_allowed
            end 
        elsif @current_user.username == 'admin'
            if @token.update(token_params)
                render json: TokenSerializer.new(@token)
            else 
                render json: { errors: "Unable to update"}
            end
        else
            render json: {errors: "Unauthorized"}, status: :unauthorized
        end
    end
  
    # DELETE /tokens/token
    def destroy
      @token.destroy
    end
  
    private
  
    def check_admin
      if @current_user.username != 'admin'
        render json: { errors: 'Unauthorized'}, status: :unauthorized
      end
    end
  
    def find_user
      @user = User.find_by_username!(params[:_username])
      rescue ActiveRecord::RecordNotFound
        render json: { errors: 'User not found' }, status: :not_found
    end
  
    def user_params
      params.permit(
        :username, :password, :no_of_tokens, :balance
      )
    end

    def find_token
        @token = Token.find_by_token!(params[:token])
        rescue ActiveRecord::RecordNotFound
            render json: { errors: 'Token not found' }, status: :not_found
    end

    def token_params
        params.permit(
         :token, :value, :expires
          )
    end
end
