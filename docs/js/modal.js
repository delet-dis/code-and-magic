'use strict';
(function () {
  //поиск модальных окон и элементов взаимодействия с ними
  const setup = document.querySelector('.setup'),
    setupOpen = document.querySelector('.setup-open'),
    usernameInput = document.querySelector('.setup-user-name'),
    setupOpenIcon = document.querySelector('.setup-open-icon'),
    dialogHandler = setup.querySelector('.upload'),
    form = setup.querySelector('.setup-wizard-form');

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

    setup.style.left = "50%";
    setup.style.top = "80px";

    window.updateSimilarWizards();
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
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    //функция высчитывания координат
    const onMouseMove = moveEvt => {
      moveEvt.preventDefault();
      dragged = true;

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

    //функция отписки от обработчика события
    const onMouseUp = upEvt => {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        const onClickPreventDefault = evt => {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  //слушатель отправки формы
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form),
      function (response) {
        setup.classList.add('hidden');
      }, window.backend.errorHandler);
      
    evt.preventDefault();
    window.updateSimilarWizards();
  });

  //слушатель закрытия модального окна
  setup.addEventListener('click', closeModal);
})()