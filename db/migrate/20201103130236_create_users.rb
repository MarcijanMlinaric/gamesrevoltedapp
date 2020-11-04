class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.integer :no_of_tokens
      t.integer :balance

      t.timestamps
    end
  end
end
