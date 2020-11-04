class TokenSerializer
  include FastJsonapi::ObjectSerializer
  attributes :token, :user_id
end
