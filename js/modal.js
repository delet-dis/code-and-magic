'use strict';

//поиск модальных окон и элементов взаимодействия с ними
const setup = document.querySelector('.setup'),
  setupOpen = document.querySelector('.setup-open');

//функция закрытия модалок
const closeModal = evt => {
  const target = evt.target;
  if (target.closest('.setup-close') || evt.code === 'Escape') {
    console.log('buh');
    setup.classList.add('hidden');
  }
};

//слушатель открытия модального окна
setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', closeModal);
});

//слушатель закрытия модального окна
setup.addEventListener('click', closeModal);