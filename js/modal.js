'use strict';

//поиск модальных окон и элементов взаимодействия с ними
const setup = document.querySelector('.setup'),
  setupOpen = document.querySelector('.setup-open'),
  usernameInput = document.querySelector('.setup-user-name'),
  setupOpenIcon = document.querySelector('.setup-open-icon');
//функция закрытия модалок
const closeModal = evt => {
  const target = evt.target;
  let curElement = document.activeElement.toString();
  if (target.closest('.setup-close') || evt.code === 'Escape' && curElement.includes('Input') === false) {
    document.removeEventListener('keydown', closeModal);
    setup.classList.add('hidden');
  };
};
//слушатель открытия модалки через фокус аватарки
setupOpenIcon.addEventListener('focus', function (evt) {
  document.addEventListener('keydown', function (evt) {
    if (evt.code === 'Enter') {
      setup.classList.remove('hidden');
      document.addEventListener('keydown', closeModal);
    }
  })
});
//слушатель открытия модального окна
setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', closeModal);
});

//слушатель закрытия модального окна
setup.addEventListener('click', closeModal);