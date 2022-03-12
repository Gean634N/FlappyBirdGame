import Player from './player.js';

window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  loading.style.display = 'none';

  const sprites = document.getElementById('sprites')
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = '320';
  canvas.height = '450';

  const player = new Player(canvas.width, canvas.height, sprites);

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    requestAnimationFrame(animate);
  };
  animate();
});
