Rails.application.routes.draw do
  resources :users, param: :_username
  resources :tokens, param: :_username
  get '/log', to: 'log#index'
  post '/auth/login', to: 'authentication#login'
  get '/*a', to: 'application#not_found'
end
