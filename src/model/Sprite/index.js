const useSprite = () => {
  const gravity = 0.7;

  class Sprite {
    constructor({ pos, velo, height, color, attColor, offset }) {
      this.pos = pos;
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
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);

      if (this.isAttacking) {
        ctx.fillStyle = this.attColor;
        ctx.fillRect(this.attackBox.pos.x + this.attackBox.offset.x, this.attackBox.pos.y, this.attackBox.width, this.attackBox.height);
      }
    }

    update(ctx, canvas) {
      this.draw(ctx);

      this.pos.x += this.velo.x;
      this.pos.y += this.velo.y;

      this.attackBox.pos.x += this.velo.x;
      this.attackBox.pos.y += this.velo.y;

      if (((this.pos.y + this.height + this.velo.y) >= canvas.height)) {
        this.velo.y = 0;
      } else {
        this.velo.y += gravity;
      }
    }

    attack() {
      this.isAttacking = true;
      setTimeout(() => {
        this.isAttacking = false;
      }, 100);
    }

  };

  return {
    Sprite
  }
}

export { useSprite };
