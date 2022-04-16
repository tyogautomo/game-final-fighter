import { Sprite } from '../Sprite';
const gravity = 0.7;


class Fighter extends Sprite {
  constructor({ pos, velo, height, color, attColor, offset, image, scale = 1, frames = 1, charOffset = { x: 0, y: 0 }, sprites }) {
    super({ pos, image, scale, frames, charOffset });
    this.velo = velo;
    this.height = height;
    this.width = 50;
    this.lastKey = '';
    this.color = color;
    this.attColor = attColor;
    this.attackBox = {
      pos: {
        x: this.pos.x,
        y: this.pos.y,
      },
      offset,
      width: 100,
      height: 50,
    }
    this.isAttacking = false;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.sprites = sprites;

    for (const sprite in this.sprites) {
      this.sprites[sprite].image = new Image();
      this.sprites[sprite].image.src = this.sprites[sprite].src;
    }
  }

  // draw(ctx) {
  //   ctx.fillStyle = this.color;
  //   ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);

  //   if (this.isAttacking) {
  //     ctx.fillStyle = this.attColor;
  //     ctx.fillRect(this.attackBox.pos.x + this.attackBox.offset.x, this.attackBox.pos.y, this.attackBox.width, this.attackBox.height);
  //   }
  // }

  update(ctx, canvas) {
    this.draw(ctx);
    this.animateFrames();

    this.pos.x += this.velo.x;
    this.pos.y += this.velo.y;

    this.attackBox.pos.x += this.velo.x;
    this.attackBox.pos.y += this.velo.y;

    if (((this.pos.y + this.height + this.velo.y) >= canvas.height - 95)) {
      this.velo.y = 0;
      this.pos.y = 332;
    } else {
      this.velo.y += gravity;
    }
  }

  attack() {
    this.isAttacking = true;
    this.switchSprite('attack1');
    setTimeout(() => {
      this.isAttacking = false;
    }, 50);
  }

  switchSprite(sprite) {
    if ((this.image === this.sprites.attack1.image) && (this.framesCurrent < this.sprites.attack1.frames - 1)) return;
    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.frames;
          this.framesCurrent = 0;
        }
        break;
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.frames;
          this.framesCurrent = 0;
        }
        break;
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image;
          this.framesMax = this.sprites.jump.frames;
          this.framesCurrent = 0;
        }
        break;
      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image;
          this.framesMax = this.sprites.fall.frames;
          this.framesCurrent = 0;
        }
        break;
      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image;
          this.framesMax = this.sprites.attack1.frames;
          this.framesCurrent = 0;
        }
        break;
      default:
        break;
    }
  }

};

export { Fighter };