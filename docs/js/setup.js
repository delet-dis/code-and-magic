'use strict';

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
  let playersSurNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
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
  return randMassive;
};

//функция создания ДОМ элемента
function createDOM(dataObj) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = dataObj.name;
  wizardElement.querySelector('.wizard-coat').style.fill = dataObj.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = dataObj.eyesColor;

  similarListElement.appendChild(wizardElement);
};


//функция сборки и отображения похожих персонажей + отображение самого блока
(function displaySimilar() {
  let randReturnResult = randReturn();
  for (let i = 0; i < randReturnResult.length; i++) {
    createDOM(randReturnResult[i]);
  };

  let setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
}());