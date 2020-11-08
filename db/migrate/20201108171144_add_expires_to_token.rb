class AddExpiresToToken < ActiveRecord::Migration[6.0]
  def change
    add_column :tokens, :expires, :timestamp
  end
end
