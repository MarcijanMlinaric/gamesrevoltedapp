class UsersController < ApplicationController
  before_action :authorize_request
  before_action :check_admin, except: :show
  before_action :find_user, except: %i[create index]

  # GET /users
  def index
    @users = User.all
    render json: UserSerializer.new(@users), status: :ok
  end

  # GET /users/{username}
  def show
    if @current_user == @user || @current_user.username == 'admin'
      render json: UserSerializer.new(@user, options), status: :ok
    else
      render json: { errors: 'Unauthorized'}, status: :unauthorized
    end
  end

  # POST /users
  def create
    @user = User.new(user_params)
    if @user.save
      render json: UserSerializer.new(@user), status: :created
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  # PUT /users/{username}
  def update
    if @user.update(user_params)
      render json: UserSerializer.new(@user), status: :ok
    else
      render json: { errors: @user.errors.full_messages },
             status: :unprocessable_entity
    end
  end

  # DELETE /users/{username}
  def destroy
    @user.destroy
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

  def options
    @options = {include: %i[tokens]}
end

end