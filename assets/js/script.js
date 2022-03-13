import Player from './player.js';
import Floor from './floor.js';
import Background from './background.js'

window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';

  const sprites = document.getElementById('sprites')
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;

  const player = new Player(canvas.width, canvas.height, sprites);
  const floor = new Floor(canvas.width, canvas.height, sprites);
  const background = new Background(canvas.width, canvas.height, sprites);

  let lastTime = 0;
  const animate = (timeStamp) => {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw(ctx);
    floor.draw(ctx);
    player.draw(ctx, deltaTime);
    requestAnimationFrame(animate);
  };
  animate(0);
});
