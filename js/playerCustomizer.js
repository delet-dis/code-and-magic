'use strict';

//объявление переменных для работы с цветами персонажа
const setupPlayer = document.querySelector('.setup-player'),
  setupWizard = document.querySelector('.setup-wizard'),
  wizardCoat = setupWizard.querySelector('.wizard-coat'),
  wizardEyes = setupWizard.querySelector('.wizard-eyes'),
  setupFireballWrap = document.querySelector('.setup-fireball-wrap'),
  inputCoatColor = document.querySelector('input[name=coat-color]'),
  inputEyesColor = document.querySelector('input[name=eyes-color]'),
  inputFireballColor = document.querySelector('input[name=fireball-color]');

//функция генерации цветов мантии персонажа
function wizardCoatColorGenerator() {
  let colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  return arrayRandElement(colors);
}

//функция генерации цветов глаз персонажа
function wizardEyesColorGenerator() {
  let colors = ['black', 'green', 'yellow', 'blue', 'red'];
  return arrayRandElement(colors);
}

//функция генерации цветов фаерболов
function fireballColorGenerator() {
  let colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  return arrayRandElement(colors);
}

setupPlayer.addEventListener('click', function (evt) {
  const target = evt.target;
  console.log('click');
  if (target.closest('.wizard-coat')) {
    let color = wizardCoatColorGenerator();
    wizardCoat.style.fill = color;
    inputCoatColor.value = color;
  };
  if (target.closest('.wizard-eyes')) {
    let color = wizardEyesColorGenerator();
    wizardEyes.style.fill = color;
    inputEyesColor.value = color;
  };
  if (target.closest('.setup-fireball-wrap')) {
    let color = fireballColorGenerator();
    setupFireballWrap.style.backgroundColor = color;
    inputFireballColor.value = color;
  }
});