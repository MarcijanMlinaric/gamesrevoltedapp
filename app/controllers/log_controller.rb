class LogController < ApplicationController
    before_action :authorize_request
    before_action :check_admin


    def index
        @entries = Log.all
        render json: LogSerializer.new(@entries), status: :ok
    end


    def check_admin
        if @current_user.username != 'admin'
          render json: { errors: 'Unauthorized'}, status: :unauthorized
        end
    end
end
