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

  }
  draw(context) {
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