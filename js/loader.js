'use strict';

(function () {
  //url сервера
  let url = 'https://javascript.pages.academy/code-and-magick/data';

  //функция получения данных с сервера
  window.load = function (onSuccess, onError) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GET', url);

    xhr.addEventListener('load', function(){
      onSuccess(xhr.response);
    });

    xhr.send();
  };
})()