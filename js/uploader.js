'use strict';

//функция отправки данных на сервер
(function () {
  let url = 'https://javascript.pages.academy/code-and-magick';

  window.upload = function (data, onSuccess) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    console.log(data);
    xhr.open('POST', url);
    xhr.send(data);
  };
})();