$(function() {
  function buildHTML(main){
    var image = (main.image == null) ? "" : `<img src="${main.image}", class='lower-message__image'></img>`
    var html = `<div class="main__main-content__li" data-message-id="${main.id}">
                  <div class="main__main-content__li__p1">${main.user_name}</div>
                  <div class="main__main-content__li__p2">${main.created_at}</div>
                  <div class="main__main-content__li__p3">
                    <p class="lower-message__content">${main.content}</p>
                      ${image}
                  </div>
                </div>`
    return html;
  };

  function scroll(){
    $('html').animate({
        scrollTop: $(document).height()
        },500)
  }

  function message(data){
    var html = buildHTML(data);
      $('.main__main-content').append(html);
  }
  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      message(data)
      $('#message_content').val('');
      scroll();
      $('.main__main-footer__back__send_box__p2').prop('disabled', false)

    })

    .fail(function(){
      alert('error');
    })
  });
  var interval = setInterval(function(){
    var last_id = $('.main__main-content__li:last').data('message-id');
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
    $.ajax({
      type: "GET",
      url: location.href.json,
      data: {last_id: last_id},
      dataType: 'json'
    })
    .done(function(data) {
      data.messages.forEach(function(message){
        if (message.id > last_id ) {
          // message(message);
          var html = buildHTML(message);
          $('.main__main-content').append(html);
          scroll();
        }
      })
     })

    .fail(function() {
     alert('自動更新に失敗しました');
    });
    } else {
      clearInterval(interval);
  }}, 5000 );
});
