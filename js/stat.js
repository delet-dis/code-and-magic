'use strict';

let renderCloud = (ctx, x, y, color) => {
  let CLOUD_WIDTH = 500;
  let CLOUD_HEIGHT = 200;
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
};

window.renderStatistics = (ctx, names, times) => {
  //статистика тень
  renderCloud(ctx, 110, 60, 'rgba(0,0,0,0.7)');

  //статистика фронт
  renderCloud(ctx, 100, 50, '#fff');
};