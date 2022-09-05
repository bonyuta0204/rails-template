Rails.application.routes.draw do
  namespace :ajax do
    resources :users, only: [:index]

    resources :channels do
      resources :messages, only: [:index]
    end
    resources :message_lists,  only: [:index]
  end

  namespace :api do
    resources :channels do
      resources :messages, only: [:index]
    end

    resources :message_lists,  only: [:index]
  end


  get ':url', to: 'vue_application#index', constraints: { url: /.*/ }, as: :vue_application
end
