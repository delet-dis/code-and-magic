'use strict';
//функция отрисовки похожих магов
(function () {
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

  //функция получения данных с бэка и отрисовки похожих магов
  window.backend.load(function (wizards) {
    let data = wizards;
    for (let i = 0; i < 4; i++) {
      createSimilar(data[i]);
    };

    let setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  }, window.backend.errorHandler);
})()