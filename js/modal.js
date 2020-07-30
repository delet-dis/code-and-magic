'use strict';

//поиск модальных окон и элементов взаимодействия с ними
const setup = document.querySelector('.setup'),
  setupOpen = document.querySelector('.setup-open'),
  usernameInput = document.querySelector('.setup-user-name'),
  setupOpenIcon = document.querySelector('.setup-open-icon'),
  dialogHandle = document.querySelector('.upload');

//функция закрытия модалок
const closeModal = evt => {
  const target = evt.target;
  let curElement = document.activeElement.toString();
  if (target.closest('.setup-close') || evt.code === 'Escape' && curElement.includes('Input') === false) {
    document.removeEventListener('keydown', closeModal);
    setup.classList.add('hidden');
  };
};

//функция открытия модалок
const openModal = evt => {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', closeModal);
};

//слушатель открытия модалки через фокус аватарки
setupOpenIcon.addEventListener('focus', function (evt) {
  document.addEventListener('keydown', function (evt) {
    if (evt.code === 'Enter') {
      openModal();
    }
  })
});

//слушатель открытия модального окна
setupOpen.addEventListener('click', function () {
  openModal();
});

//перетаскивание модального окна за аватарку в несколько этапов
dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  console.log('move');

  let startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  //функция высчитывания координат
  const onMouseMove = moveEvt => {
    moveEvt.preventDefault();

    let shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
};
  document.addEventListener('mousemove', onMouseMove);
  // document.addEventListener('mouseup', onMouseUp);
});


//слушатель закрытия модального окна
setup.addEventListener('click', closeModal);