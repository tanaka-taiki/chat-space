class AddIndexMessagesUserIdGroupIdTextImage < ActiveRecord::Migration[5.0]
  def change
    add_index messages, [:user_id, :group_id, :body, :image]
  end
end
