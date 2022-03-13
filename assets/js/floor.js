class Floor {
  constructor(gameWidth, gameHeight, image) {
    this.gameWidth = gameWidth; // largura da tela de jogo
    this.gameHeight = gameHeight; // altura da tela de jogo
    this.image = image;
    this.x = 0; // posição em X na tela
    this.y = this.gameHeight - 112; // posição em Y na tela
    this.width = 224; // tamanho do recorte n osprite em X
    this.height = 212; // tamanho do recorte no sprite em Y
    this.sx = 0; // posição em X no sprite
    this.sy = 610; // posição em Y no sprite
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
    context.drawImage(
      this.image,
      this.sx, this.sy, // posição X e Y no sprite
      this.width, this.height, // tamanho do recorte no sprite
      this.x + this.width * 2, this.y, // posição de destino
      this.width, this.height // tamanho do destino
    );
    context.drawImage(
      this.image,
      this.sx, this.sy, // posição X e Y no sprite
      this.width, this.height, // tamanho do recorte no sprite
      this.x + this.width * 3, this.y, // posição de destino
      this.width, this.height // tamanho do destino
    );
    context.drawImage(
      this.image,
      this.sx, this.sy, // posição X e Y no sprite
      this.width, this.height, // tamanho do recorte no sprite
      this.x + this.width * 4, this.y, // posição de destino
      this.width, this.height // tamanho do destino
    );
  }
};

export default Floor;
