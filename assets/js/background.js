class Background {
  constructor(gameWidth, gameHeight, image) {
    this.gameWidth = gameWidth; // largura da tela de jogo
    this.gameHeight = gameHeight; // altura da tela de jogo
    this.image = image;
    this.x = 0; // posição em X na tela
    this.y = this.gameHeight - 204; // posição em Y na tela
    this.width = 275; // tamanho do recorte no sprite em X (Largura)
    this.height = 204; // tamanho do recorte no sprite em Y (Altura)
    this.sx = 390; // posição em X no sprite
    this.sy = 0; // posição em Y no sprite
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.sx, this.sy, // posição X e Y no sprite
      this.width, this.height, // tamanho do recorte no sprite
      this.x, this.y, // posição de destino
      this.width, this.height // tamanho do destino
    );
    context.drawImage(
      this.image,
      this.sx, this.sy, // posição X e Y no sprite
      this.width, this.height, // tamanho do recorte no sprite
      this.x + this.width, this.y, // posição de destino
      this.width, this.height // tamanho do destino
    );
  }
};

export default Background;