Rails.application.routes.draw do
  namespace :ajax do
  end
  get ':url', to: 'vue_application#index', constraints: { url: /.*/ }, as: :vue_application
end
