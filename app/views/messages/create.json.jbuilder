json.content    @message.content
json.image      @message.image.url
json.group_id   @message.group_id
json.user_id    @message.user_id
json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M')
json.user_name  @message.user.name
