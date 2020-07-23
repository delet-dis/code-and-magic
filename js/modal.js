'use strict';

//поиск модальных окон и элементов взаимодействия с ними
const setup = document.querySelector('.setup'),
      setupOpen = document.querySelector('.setup-open');

let closeModal = evt => {

};

//слушатель открытия модального окна
setupOpen.addEventListener('click', function(){
  setup.classList.remove('hidden');
});