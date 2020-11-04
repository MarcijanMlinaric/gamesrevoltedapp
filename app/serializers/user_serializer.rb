class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :no_of_tokens, :balance

  has_many :tokens
end
