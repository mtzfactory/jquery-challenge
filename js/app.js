$('#helpBlock').hide();
$('#todoInput').focus();

$('#todoForm').submit(function (event) {
  event.preventDefault(); // para prevenir que el submit recargue la página.

  var input = $(this).find('#todoInput');
  var toDo = input.val();
  if (toDo) {
    var todoElement = $('<li>' + toDo + '<a href="#"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></a></li>');
    var todoList = $('.todoSection ul.todoList');
    var repeated = $('.todoList > li').filter(function() {
      return $(this).text() == toDo;
    });
    if (repeated.length > 0) {
      $(this).find('#helpBlock').show();
      $(this).addClass('has-error');
    }
    else {
      $(this).find('#helpBlock').hide();
      $(this).removeClass('has-error');
      todoList.append(todoElement);
      input.val('');
    }
  }
});

// delegamos en el documento para gestionar los clicks sobre los anchor.
$(document).on('click', 'a', function () {
  console.log($(this).parent());
  var done = $(this).parent();
  $(this).parent().remove();
  $('.todoSection ul.doneList').append(done);
});
