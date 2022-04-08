const useSprite = () => {
  const gravity = 0.7;

  class Sprite {
    constructor({ pos, velo, height }) {
      this.pos = pos;
      this.velo = velo;
      this.height = height;
      this.lastKey = '';
    }

    draw(ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.pos.x, this.pos.y, 50, this.height);
    }

    update(ctx, canvas) {
      this.draw(ctx);

      this.pos.x += this.velo.x;
      this.pos.y += this.velo.y;

      if (((this.pos.y + this.height + this.velo.y) >= canvas.height)) {
        this.velo.y = 0;
      } else {
        this.velo.y += gravity;
      }
    }
  };

  return {
    Sprite
  }
}

export { useSprite };
