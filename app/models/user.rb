class User < ApplicationRecord
  has_many :messages, foreign_key: 'created_by'
end
