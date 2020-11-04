class LogSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :action
end
