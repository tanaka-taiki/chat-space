class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true

  mount_uploader :image, ImageUploader
  mount_uploader :image, ImageUploader
end
