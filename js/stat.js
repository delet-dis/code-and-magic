'use strict';

let renderCloud = (ctx, x, y, color) => {
  let CLOUD_WIDTH = 500;
  let CLOUD_HEIGHT = 200;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
};

let renderDiagram = (ctx, names, times) => {

  //константы
  let COLUMN_WIDTH = 50;

  //вычисление максимального значения и имени
  let minTimeElement = Math.max(...times);
  let minTimeIndex = times.indexOf(minTimeElement);
  let minTimeName = names[minTimeIndex];

  //отрисовка
  for (const name of names) {

    //позиционирование
    let nameX = 135 + names.indexOf(name) * 90;

    //отрисовка имен
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(name, nameX, 240);
    
    //заливка столбцов
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    } else {
      ctx.fillStyle = 'rgba(0,0,255,' + Math.random() + ')';
    }
    //отрисовка столбцов
    ctx.fillRect(nameX, 195, COLUMN_WIDTH, 20);
  }
}

window.renderStatistics = (ctx, names, times) => {

  //статистика тень
  renderCloud(ctx, 110, 60, 'rgba(0,0,0,0.7)');

  //статистика фронт
  renderCloud(ctx, 100, 50, '#fff');

  //отрисовка текста
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура, Вы победили!', 110, 75);
  ctx.fillText('Список результатов:', 110, 95);

  //вызов рендера диаграммы
  renderDiagram(ctx, names, times);
};