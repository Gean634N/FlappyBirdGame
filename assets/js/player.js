class Player {
  constructor(gameWidth, gameHeight, image) {
    this.gameWidth = gameWidth; // largura da tela de jogo
    this.gameHeight = gameHeight; // altura da tela de jogo
    this.image = image;
    this.x = 50; // posição em X na tela
    this.y = 0; // posição em Y na tela
    this.width = 34; // tamanho do recorte no sprite em X (Largura)
    this.height = 26; // tamanho do recorte no sprite em Y (Altura)
    this.floorHeight = 108;
    this.weight = 0.2; // peso do personagem ou gravidade
    this.sx = 0; // posição em X no sprite
    this.sy = 0; // posição em Y no sprite do 1° frame
    this.vy = 0; // velocidade em Y
    this.speed = 0;
    this.maxSpeed = 8;
    this.frame = 0; // frame renderizado
    this.maxFrame = 2; // numero de frames -1 que a animação contem
    this.fps = 60; // taxa de atualização em frames por segundo
    this.frameTimer = 0; // acumulador responsavel por medir o tempo
    this.frameInterval = 1000 / this.fps;
    // window.addEventListener('mousemove', (e) => {
    //   this.vy = (e.clientY - this.y - this.height) * 0.1;
    //   this.speed = (e.clientX - this.x - this.width / 2) * 0.2;
    // })
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.vy -= 11;
          break;
        case " ":
          this.vy -= 11;
          break;
        case "ArrowDown":
          this.vy += 5;
          break;
        case "ArrowRight":
          this.speed = this.maxSpeed;
          break;
        case "ArrowLeft":
          this.speed = -this.maxSpeed;
          break;
      }
    })
    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case "ArrowRight":
          this.speed = 0;
          console.log(this.speed);
          break;
        case "ArrowLeft":
          this.speed = 0;
          console.log(this.speed);
          break;
      }
    })
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

  update = () => {
    this.y += this.vy;
    this.x += this.speed;
    if (this.y < 0) {
      this.vy = 0;
      this.y = 0;
    } else if (this.y < this.gameHeight - this.height - this.floorHeight) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
      this.y = this.gameHeight - this.height - this.floorHeight;
      this.frame = 2;
    }
    if (this.x > this.gameWidth - this.width) this.x = 0;// this.gameWidth - this.width;
    if (this.x < 0) this.x = 0;
  }

  draw(context, deltaTime) {
    this.handleFPS(deltaTime);
    this.update();
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