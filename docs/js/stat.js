'use strict';
(() => {
  const renderCloud = (ctx, x, y, color) => {
    const CLOUD_WIDTH = 500;
    const CLOUD_HEIGHT = 200;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
  };

  const renderDiagram = (ctx, names, times) => {

    //константы
    const COLUMN_WIDTH = 40;

    //вычисление максимального значения и имени
    let maxTimeElement = Math.max(...times);
    let maxTimeIndex = times.indexOf(maxTimeElement);
    let maxTimeName = names[maxTimeIndex];
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
      let columnHeight = (times[names.indexOf(name)] * 110) / maxTimeElement;
      ctx.fillRect(nameX, 220, COLUMN_WIDTH, -columnHeight);
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
})()