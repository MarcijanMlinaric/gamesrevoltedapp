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
            @token = Token.new({token: (0...10).map { (48 + rand(10)).chr }.join, user_id: @current_user.id})
            if @token.save
                @current_user.update({no_of_tokens: @current_user.no_of_tokens - 1})
                Log.new({user_id: @current_user.id, action: "User created token"}).save  
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
            @user.update({balance: @user.balance + 10})
            Log.new({user_id: @current_user.id, action: "User used token"}).save
            @token.destroy
            render json: UserSerializer.new(@user, {include: %i[tokens]}), status: :ok
        else
            render json: {errors: "Unauthorized"}, status: :unauthorized
        end
    end
  
    # DELETE /users/{username}
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
end
