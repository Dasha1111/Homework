function show() {
  let cover = document.createElement('div');
  cover.id = 'cover';
  document.body.style.overflowY = 'hidden';
  document.body.append(cover);
}

function hide() {
  document.querySelector('#cover').remove();
  document.body.style.overflowY = '';
}

function showPrompt(text, callback) {
  show();
  let form = document.querySelector('#form');
  let container = document.querySelector('#container');
  document.querySelector('#message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hide();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function() {
    let value = form.text.value;
    if (value == '') return false; 

    complete(value);
    return false;
  };

  form.cancel.onclick = function() {
    complete(null);
  };

  document.onkeydown = function(e) {
    if (e.key == 'Escape') {
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function(e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function(e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  form.elements.text.focus();
}

document.querySelector('#showForm').onclick = function() {
  showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
    alert("Вы ввели: " + value);
  });
};