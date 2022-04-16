class Sprite {
  constructor({ pos, image, scale = 1, frames = 1, charOffset = { x: 0, y: 0 } }) {
    this.pos = pos;
    this.height = 150;
    this.width = 50;
    this.image = new Image();
    this.image.src = image;
    this.scale = scale;
    this.framesMax = frames;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 10;
    this.charOffset = charOffset;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      // crop
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      // size and position
      this.pos.x - this.charOffset.x,
      this.pos.y - this.charOffset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  animateFrames() {
    this.framesElapsed++
    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update(ctx) {
    this.draw(ctx);
    this.animateFrames();
  }

};

export { Sprite };
