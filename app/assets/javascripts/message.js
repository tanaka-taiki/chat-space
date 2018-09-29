$(function() {
  function buildHTML(comment){
    var html = `<p>
                  <strong>
                    <a href=/users/${message.user_id}>${message.user_name}</a>
                    ：
                  </strong>
                  ${message.content}
                </p>`
    return html;
  }
  $('form').on('submit', function(e) {
    console.log('送信ボタンが押されました');
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.textbox').val('')
    })
    $('html').animate({
        scrollTop: $(document).height()
      },500)
    .fail(function(){
      alert('error');
    })
  });
});
