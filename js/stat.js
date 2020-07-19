'use strict';

let renderCloud = (ctx, x, y, color) => {
  let CLOUD_WIDTH = 500;
  let CLOUD_HEIGHT = 200;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
};

let renderDiagram = (ctx, names, times) => {
  let minTimeElement = Math.max(...times);
  let minTimeIndex = times.indexOf(minTimeElement);
  let minTimeName = names[minTimeIndex];

  for (const name of names) {
    ctx.fillText(name, names.indexOf(name) * 10, 240);
    console.log(name,names.indexOf(name)*10);
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
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

  //поиск минимального элемента и его индекса


  renderDiagram(ctx, names, times);
};