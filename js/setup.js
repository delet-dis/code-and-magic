'use strict';
//объявление и показ блока
let setupEl = document.querySelector('.setup');

setupEl.classList.remove('hidden');


//объявление списка похожих магов и темплейта мага
let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


//функция случайного пика значения
let arrayRandElement = arr => {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

//функция возврата рандомных персонажей
function randReturn() {
  //данные для случайных персонажей
  let playersNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  let playersSurNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирваинг'];
  let playersCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  let playersEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

  let randMassive = [];
  for (let i = 0; i < 4; i++) {
    let randPlayersData = {};
    randPlayersData.name = arrayRandElement(playersNames) + ' ' + arrayRandElement(playersSurNames);
    randPlayersData.coatColor = arrayRandElement(playersCoatColors);
    randPlayersData.eyesColor = arrayRandElement(playersEyesColors);
    randMassive.push(randPlayersData);
  };
  console.log(randMassive);
};

randReturn();