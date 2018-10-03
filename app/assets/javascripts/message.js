$(function() {
  function buildHTML(main){
    main.image == null ? image = "" : image = `<img src="${main.image}", class='lower-message__image'></img>`
    var html = `<div class="main__main-content__li">
                  <div class="main__main-content__li__p1">${main.user_name}</div>
                  <div class="main__main-content__li__p2">${main.created_at}</div>
                  </div>
                  <div class="main__main-content__li__p3">
                  <p class="lower-message__content">${main.content}</p>
                    ${image}
                  </div>`
    return html;
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
      var html = buildHTML(data)
      $('.main__main-content').append(html)
      $('#message_content').val('');
      $('html').animate({
        scrollTop: $(document).height()
        },500)
    })

    .fail(function(){
      alert('error');
    })

    .always(function() {
      $('.main__main-footer__back__send_box__p2').prop('disabled', false)
      })
  });
});
