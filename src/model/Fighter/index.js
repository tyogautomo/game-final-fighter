import { Sprite } from '../Sprite';
const gravity = 0.7;


class Fighter extends Sprite {
  constructor({
    pos,
    velo,
    height,
    width,
    color,
    attColor,
    charOffset = { x: 0, y: 0 },
    image,
    scale = 1,
    frames = 1,
    sprites,
    attackBox = {
      offset: {},
      width: undefined,
      height: undefined,
    }
  }) {
    super({ pos, image, scale, frames, charOffset });
    this.velo = velo;
    this.height = height;
    this.width = width;
    this.lastKey = '';
    this.color = color;
    this.attColor = attColor;
    this.attackBox = {
      pos: {
        x: this.pos.x,
        y: this.pos.y,
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height,
    }
    this.isAttacking = false;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;
    this.isDead = false;
    this.sprites = sprites;

    for (const sprite in this.sprites) {
      this.sprites[sprite].image = new Image();
      this.sprites[sprite].image.src = this.sprites[sprite].src;
    }
  }

  update(ctx, canvas) {
    this.draw(ctx);
    if (!this.isDead) {
      this.animateFrames();
    }

    this.attackBox.pos.x = this.pos.x + this.attackBox.offset.x;
    this.attackBox.pos.y = this.pos.y + this.attackBox.offset.y;

    this.pos.x += this.velo.x;
    this.pos.y += this.velo.y;

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
  }

  takeHit() {
    this.switchSprite('take hit');
  }

  switchSprite(sprite) {
    if ((this.image === this.sprites.attack1.image) && (this.framesCurrent < this.sprites.attack1.frames - 1)) return;
    if ((this.image === this.sprites.takeHit.image) && (this.framesCurrent < this.sprites.takeHit.frames - 1)) return;
    if ((this.image === this.sprites.death.image)) {
      if (this.framesCurrent === this.sprites.death.frames - 1) {
        this.isDead = true;
      }
      return;
    }

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
      case 'take hit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image;
          this.framesMax = this.sprites.takeHit.frames;
          this.framesCurrent = 0;
        }
        break;
      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image;
          this.framesMax = this.sprites.death.frames;
          this.framesCurrent = 0;
        }
        break;
      default:
        break;
    }
  }

};

export { Fighter };