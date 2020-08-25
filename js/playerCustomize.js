'use strict';
(() => {
  // функция случайного пика значения
  const arrayRandElement = (arr) => {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  };

  // объявление переменных для работы с цветами персонажа
  const setupPlayer = document.querySelector('.setup-player');
  const setupWizard = document.querySelector('.setup-wizard');
  const wizardCoat = setupWizard.querySelector('.wizard-coat');
  const wizardEyes = setupWizard.querySelector('.wizard-eyes');
  const setupFireballWrap = document.querySelector('.setup-fireball-wrap');
  const inputCoatColor = document.querySelector('input[name=coat-color]');
  const inputEyesColor = document.querySelector('input[name=eyes-color]');
  const inputFireballColor = document
      .querySelector('input[name=fireball-color]');

  // функция генерации цветов мантии персонажа
  window.playerCoatColor = wizardCoat.style.fill;

  const wizardCoatColorChanger = () => {
    const colors = ['rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'];
    const color = arrayRandElement(colors);

    wizardCoat.style.fill = color;
    inputCoatColor.value = color;
    window.playerCoatColor = color;
  };

  // функция генерации цветов глаз персонажа
  window.playerEyesColor = wizardEyes.style.fill;

  const wizardEyesColorChanger = () => {
    const colors = ['black', 'green', 'yellow', 'blue', 'red'];
    const color = arrayRandElement(colors);

    wizardEyes.style.fill = color;
    inputEyesColor.value = color;
    window.playerEyesColor = color;
  };

  // функция генерации цветов фаерболов
  const fireballColorChanger = () => {
    const colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    const color = arrayRandElement(colors);

    setupFireballWrap.style.backgroundColor = color;
    inputFireballColor.value = color;
  };

  // дебаунс(устранение дребезжания)
  const debounce = () => {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    };

    lastTimeout = window.setTimeout(() => {
      window.updateSimilarWizards();
    }, 300);
  };

  // слушатель обновления цвета персонажа по нажатию
  let lastTimeout;
  setupPlayer.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target.closest('.wizard-coat')) {
      wizardCoatColorChanger();
      debounce();
    };

    if (target.closest('.wizard-eyes')) {
      wizardEyesColorChanger();
      debounce();
    };

    if (target.closest('.setup-fireball-wrap')) {
      fireballColorChanger();
    }
  });
})();
