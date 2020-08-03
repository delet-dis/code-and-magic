'use strict';

(function () {
  //url сервера
  let url = 'https://javascript.pages.academy/code-and-magick/data';

  //функция получения данных с сервера
  window.load = function (onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', url);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError(xhr.response);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.send();
  };
})()