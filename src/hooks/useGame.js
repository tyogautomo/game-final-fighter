/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

import { useSprite } from "../model/Sprite";

const useGame = () => {
  const canvasRef = useRef(null);

  const { Sprite } = useSprite();
  const veloWalk = 5;
  const veloJump = 20;

  const keys = {
    a: { pressed: false },
    d: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
  }

  useEffect(() => {
    initCanvas();

    const { player1, player2, ctx } = initPlayers();

    animate(player1, player2, ctx);

    initEventListener(player1, player2);
  }, []);

  const initEventListener = (player1, player2) => {
    window.addEventListener('keydown', onKeydown(player1, player2));
    window.addEventListener('keyup', onKeyup(player1, player2));
  };

  const onKeydown = (player1, player2) => (e) => {
    switch (e.key) {
      // player 1
      case 'a':
        keys.a.pressed = true;
        player1.lastKey = 'a';
        break;
      case 'd':
        keys.d.pressed = true;
        player1.lastKey = 'd';
        break;
      case 'w':
        player1.velo.y = -veloJump;
        break;
      //  player 2
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true;
        player2.lastKey = 'ArrowLeft';
        break;
      case 'ArrowRight':
        keys.ArrowRight.pressed = true;
        player2.lastKey = 'ArrowRight';
        break;
      case 'ArrowUp':
        player2.velo.y = -veloJump;
        break;
      default:
        break;
    }
  };

  const onKeyup = (player1, player2) => (e) => {
    switch (e.key) {
      // player 1
      case 'a':
        keys.a.pressed = false;
        break;
      case 'd':
        keys.d.pressed = false;
        break;
        break;
      // player 2
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = false;
        break;
      case 'ArrowRight':
        keys.ArrowRight.pressed = false;
        break;
      default:
        break;
    }
  }

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvasRef.current.getContext('2d');

    canvas.width = 1024;
    canvas.height = 576;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const initPlayers = () => {
    const ctx = canvasRef.current.getContext('2d');

    const posPlayer1 = { x: 0, y: 0 };
    const veloPlayer1 = { x: 0, y: 4 };
    const player1 = new Sprite({ velo: veloPlayer1, pos: posPlayer1, height: 150 });

    const posPlayer2 = { x: 500, y: 100 };
    const veloPlayer2 = { x: 0, y: 4 };
    const player2 = new Sprite({ velo: veloPlayer2, pos: posPlayer2, height: 150 });

    return { player1, player2, ctx }
  };

  const animate = (player1, player2, ctx) => {
    window.requestAnimationFrame(() => animate(player1, player2, ctx));

    const canvas = canvasRef.current;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player1.update(ctx, canvas);
    player2.update(ctx, canvas);

    player1.velo.x = 0;
    if (keys.a.pressed && player1.lastKey === 'a') {
      player1.velo.x = -veloWalk;
    } else if (keys.d.pressed && player1.lastKey === 'd') {
      player1.velo.x = veloWalk
    }

    player2.velo.x = 0;
    if (keys.ArrowLeft.pressed && player2.lastKey === 'ArrowLeft') {
      player2.velo.x = -veloWalk;
    } else if (keys.ArrowRight.pressed && player2.lastKey === 'ArrowRight') {
      player2.velo.x = veloWalk
    }
  };

  return { canvasRef };
};

export { useGame };
