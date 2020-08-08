'use strict';
//функция отрисовки похожих магов
(function () {

  //функция получения данных с бэка и отрисовки похожих магов
  let recivedData = [];
  window.backend.load(function (wizards) {
    recivedData = wizards;

    let setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  }, window.backend.errorHandler);

  //функция рассчета коэффициента совпадений
  let getRank = function (wizard) {
    let rank = 0;

    if (wizard.colorCoat === window.playerCoatColor) {
      rank += 2;
    };
    if (wizard.colorEyes === window.playerEyesColor) {
      rank += 1;
    };
    return rank;
  };

  //функция распределения по именам
  let namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
  //объявление списка похожих магов и темплейта мага
  let similarListElement = document.querySelector('.setup-similar-list');
  let similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  //функция создания ДОМ элемента
  function createSimilar(dataObj) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = dataObj.name;
    wizardElement.querySelector('.wizard-coat').style.fill = dataObj.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = dataObj.colorEyes;

    similarListElement.appendChild(wizardElement);
  };

  //функция обновления списка похожих волшебников
  function updateSimilarWizards() {
    let sameCoatAndEyesWizards = recivedData.filter(item => {
      return item.colorCoat === window.playerCoatColor &&
        item.colorEyes === window.playerEyesColor;
    })
    let sameCoatWizards = recivedData.filter(item => {
      return item.colorCoat === window.playerCoatColor;
    });
    let sameEyesWizards = recivedData.filter(item => {
      return item.colorEyes === window.playerEyesColor;
    })
    let filteredWizards = sameCoatAndEyesWizards.concat(sameCoatWizards, sameEyesWizards, recivedData);

    let uniqeWizards = filteredWizards.filter((item, i) => {
      return filteredWizards.indexOf(item) === i;
    })
  };
})()