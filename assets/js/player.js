class Player {
  constructor(gameWidth, gameHeight, image) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.image = image;
    this.x = 0;
    this.y = 0;
    this.width = 34;
    this.height = 26;
    this.sx = 0;
    this.frame = 0;
    this.maxFrame = 2;
    this.fps = 60;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
  }
  handleFPS = (deltaTime) => {
    if (this.frameTimer > this.frameInterval) {
      if (this.frame < this.maxFrame) this.frame++;
      else this.frame = 0;
      this.frameTimer = 0; // retorna o timer para zero.
    } else {
      this.frameTimer += deltaTime;
    }
  }
  draw(context, deltaTime) {
    this.handleFPS(deltaTime);
    context.drawImage(
      this.image,
      this.sx, this.height * this.frame, // posição X e Y no sprite
      this.width, this.height, // tamanho do recorte no sprite
      this.x, this.y, // posição de destino
      this.width, this.height // tamanho do destino
    );
  }
};

export default Player;