'use strict';
// функция отрисовки похожих магов
(() => {
  // функция получения данных с бэка и отрисовки похожих магов
  let recivedData = [];
  window.backend.load((wizards) => {
    recivedData = wizards;

    const setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');
  }, window.backend.errorHandler);

  // функция рассчета коэффициента совпадений
  const getRank = (wizard) => {
    let rank = 0;

    if (wizard.colorCoat === window.playerCoatColor) {
      rank += 2;
    };

    if (wizard.colorEyes === window.playerEyesColor) {
      rank += 1;
    };

    return rank;
  };

  // функция распределения по именам в случае конфликта
  const namesComparator = (left, right) => {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  // объявление списка похожих магов и темплейта мага
  const similarListElement = document.querySelector('.setup-similar-list');
  const similarWizardTemplate = document
      .querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  // функция создания ДОМ элемента
  const createSimilar = (dataObj) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);

    // eslint-disable-next-line max-len
    wizardElement.querySelector('.setup-similar-label').innerText = dataObj.name;
    wizardElement.querySelector('.wizard-coat').style.fill = dataObj.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = dataObj.colorEyes;

    return wizardElement;
  };

  // функция отображения похожих магов
  const render = (data) => {
    const takeNumber = data.length > 4 ? 4 : data.length;
    similarListElement.innerHTML = '';

    for (let i = 0; i < takeNumber; i++) {
      similarListElement.appendChild(createSimilar(data[i]));
    }

    similarListElement.classList.remove('hidden');
  };

  // функция обновления списка похожих волшебников
  window.updateSimilarWizards = () => {
    render(recivedData.sort((left, right) => {
      let rankDiff = getRank(right) - getRank(left);

      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      };

      return rankDiff;
    }));
  };
})();
