## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|null: false, foreign_key: true|
|e-mail|text|null: false, unique: true|

### Association
- has_many :members
- has_many :groups, :through: members
- has_many :messages


## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :users, :through: members
- has_many :messages


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|image|string|
|text|text|

### Association
- belongs_to :user
- belongs_to :group
