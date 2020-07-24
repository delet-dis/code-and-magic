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
function wizardCoatColorChanger() {
  let colors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  let color = arrayRandElement(colors);
  wizardCoat.style.fill = color;
  inputCoatColor.value = color;
}

//функция генерации цветов глаз персонажа
function wizardEyesColorChanger() {
  let colors = ['black', 'green', 'yellow', 'blue', 'red'];
  let color = arrayRandElement(colors);
  wizardEyes.style.fill = color;
  inputEyesColor.value = color;
}

//функция генерации цветов фаерболов
function fireballColorChanger() {
  let colors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  let color = arrayRandElement(colors);
  setupFireballWrap.style.backgroundColor = color;
  inputFireballColor.value = color;
}

setupPlayer.addEventListener('click', function (evt) {
  const target = evt.target;
  console.log('click');
  if (target.closest('.wizard-coat')) {
    wizardCoatColorChanger();
  };
  if (target.closest('.wizard-eyes')) {
    wizardEyesColorChanger();
  };
  if (target.closest('.setup-fireball-wrap')) {
    fireballColorChanger();
  }
});