class AddValueToToken < ActiveRecord::Migration[6.0]
  def change
    add_column :tokens, :value, :integer
  end
end
