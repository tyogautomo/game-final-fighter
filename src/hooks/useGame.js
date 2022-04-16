/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

import { Sprite } from "../model/Sprite";
import { Fighter } from '../model/Fighter';
import shopImg from '../assets/images/shop.png';
import playerOneRun from '../assets/images/p1/Run.png';
import playerOneJump from '../assets/images/p1/Jump.png';
import playerOneIdle from '../assets/images/p1/Idle.png';
import playerOneFall from '../assets/images/p1/Fall.png';
import playerOneAttack1 from '../assets/images/p1/Attack1.png';
import backgroundImg from '../assets/images/background.png';
import { TIE, PLAYER_1_WIN, PLAYER_2_WIN } from '../utils/constant';

const useGame = () => {
  const [timer, setTimer] = useState(30);
  const [playerOneHealth, setPlayerOneHealth] = useState(100);
  const [playerTwoHealth, setPlayerTwoHealth] = useState(100);
  const [result, setResult] = useState('');

  const clockRef = useRef(null);
  const counter = useRef(timer);
  const canvasRef = useRef(null);
  const resultRef = useRef(result);
  const playerOneHealthRef = useRef(playerOneHealth);
  const playerTwoHealthRef = useRef(playerTwoHealth);

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

    const { player1, player2, background, ctx, shop } = initSprites();

    animate({ player1, player2, background, ctx, shop });

    initEventListener(player1, player2);
    setTimeout(() => {
      runTimer();
    }, 1000);
  }, []);

  const runTimer = () => {
    if (counter.current === 0) {
      let finalResult = result;
      if (playerOneHealthRef.current === playerTwoHealthRef.current) {
        finalResult = TIE;
      } else if (playerOneHealthRef.current > playerTwoHealthRef.current) {
        finalResult = PLAYER_1_WIN;
      } else {
        finalResult = PLAYER_2_WIN;
      }
      resultRef.current = finalResult;
      setResult(finalResult);
    }
    if (counter.current > 0) {
      counter.current = counter.current - 1
      setTimer(prev => prev - 1);
      clockRef.current = setTimeout(runTimer, 1000);
    }

  };

  const initEventListener = (player1, player2) => {
    window.addEventListener('keydown', onKeydown(player1, player2));
    window.addEventListener('keyup', onKeyup(player1, player2));
  };

  const onKeydown = (player1, player2) => (e) => {
    if (!resultRef.current) {
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
        case ' ':
          player1.attack();
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
        case 'Enter':
          player2.attack();
          break;
        default:
          break;
      }
    }
  };

  const onKeyup = (player1, player2) => (e) => {
    if (!resultRef.current) {
      switch (e.key) {
        // player 1
        case 'a':
          keys.a.pressed = false;
          break;
        case 'd':
          keys.d.pressed = false;
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
  }

  const initCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvasRef.current.getContext('2d');

    canvas.width = 1024;
    canvas.height = 576;

    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const initSprites = () => {
    const ctx = canvasRef.current.getContext('2d');

    const background = new Sprite({
      pos: { x: 0, y: 0 },
      image: backgroundImg,
    })

    const shop = new Sprite({
      pos: { x: 650, y: 161 },
      image: shopImg,
      scale: 2.5,
      frames: 6,
    })

    const player1 = new Fighter({
      velo: { x: 0, y: 4 },
      pos: { x: 70, y: 0 },
      height: 150,
      color: 'red',
      attColor: 'blue',
      offset: { x: 0, y: 0 },
      charOffset: { x: 0, y: 155 },
      image: playerOneIdle,
      frames: 8,
      scale: 2.5,
      sprites: {
        idle: {
          src: playerOneIdle,
          frames: 8
        },
        run: {
          src: playerOneRun,
          frames: 8
        },
        jump: {
          src: playerOneJump,
          frames: 2
        },
        fall: {
          src: playerOneFall,
          frames: 2
        },
        attack1: {
          src: playerOneAttack1,
          frames: 6
        }
      }
    });

    const player2 = new Fighter({
      velo: { x: 0, y: 4 },
      pos: { x: 500, y: 100 },
      height: 150,
      color: 'green',
      attColor: 'purple',
      offset: { x: -50, y: 0 }
    });

    return { player1, player2, background, shop, ctx }
  };

  const rectangularCollision = (rect1, rect2) => {
    return (rect1.attackBox.pos.x + rect1.attackBox.width >= rect2.pos.x)
      && (rect1.attackBox.pos.x <= rect2.pos.x + rect2.width)
      && (rect1.attackBox.pos.y + rect1.attackBox.height >= rect2.pos.y)
      && (rect1.attackBox.pos.y <= rect2.pos.y + rect2.height)
  };

  const handleAttack = (setter, ref, winMsg) => {
    const decrement = 5;
    if (ref.current > 0) {
      ref.current = ref.current - decrement;
      setter(prev => prev - decrement);

      if (ref.current === 0) {
        clearTimeout(clockRef.current);
        resultRef.current = winMsg;
        setResult(winMsg);
      }
    }
  };

  const animate = (params) => {
    const { player1, player2, background, ctx, shop } = params;
    window.requestAnimationFrame(() => animate(params));

    const canvas = canvasRef.current;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    background.update(ctx);
    shop.update(ctx);

    player1.update(ctx, canvas);
    // player2.update(ctx, canvas);


    // handle movement
    player1.velo.x = 0;
    if (keys.a.pressed && player1.lastKey === 'a') {
      player1.velo.x = -veloWalk;
      player1.switchSprite('run');
    } else if (keys.d.pressed && player1.lastKey === 'd') {
      player1.velo.x = veloWalk
      player1.switchSprite('run');
    } else {
      player1.switchSprite('idle');
    }
    if (player1.velo.y < 0) {
      player1.switchSprite('jump');
    } else if (player1.velo.y > 0) {
      player1.switchSprite('fall');
    }

    player2.velo.x = 0;
    if (keys.ArrowLeft.pressed && player2.lastKey === 'ArrowLeft') {
      player2.velo.x = -veloWalk;
    } else if (keys.ArrowRight.pressed && player2.lastKey === 'ArrowRight') {
      player2.velo.x = veloWalk
    }

    if (resultRef.current) {
      player1.velo.x = 0;
      player2.velo.x = 0;
    }

    // detect collision
    if (rectangularCollision(player1, player2) && player1.isAttacking) {
      player1.isAttacking = false;
      handleAttack(setPlayerTwoHealth, playerTwoHealthRef, PLAYER_1_WIN);
    }
    if (rectangularCollision(player1, player2) && player2.isAttacking) {
      player2.isAttacking = false;
      handleAttack(setPlayerOneHealth, playerOneHealthRef, PLAYER_2_WIN);
    }
  };

  return {
    timer,
    result,
    canvasRef,
    playerOneHealth,
    playerTwoHealth,
  };
};

export { useGame };
