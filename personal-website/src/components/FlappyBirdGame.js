import React, { useRef, useEffect, useState, useCallback } from 'react';
import './FlappyBirdGame.css';

const FlappyBirdGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const bird = useRef({
    x: 50,
    y: 150,
    radius: 12,
    velocity: 0,
    gravity: 0.2, // Reduced gravity
    jump: -5, // Smoother jump
  });

  const pipes = useRef([]);
  const pipeWidth = 40;
  const pipeGap = 180; // Increased gap
  const pipeSpeed = 1.5; // Slightly slower pipe speed
  const pipeInterval = 2000; // milliseconds (increased interval for more reaction time)

  const gameLoopRef = useRef();
  const lastPipeTimeRef = useRef(0);

  const draw = useCallback((ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw bird
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(bird.current.x, bird.current.y, bird.current.radius, 0, Math.PI * 2);
    ctx.fill();

    // Draw pipes
    ctx.fillStyle = 'green';
    pipes.current.forEach(pipe => {
      ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
      ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, ctx.canvas.height - pipe.bottom);
    });

    // Draw score
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 25);

    if (gameOver) {
      ctx.fillStyle = 'red';
      ctx.font = '40px Arial';
      ctx.fillText('Game Over!', ctx.canvas.width / 2 - 100, ctx.canvas.height / 2);
      ctx.font = '20px Arial';
      ctx.fillText('Click to Restart', ctx.canvas.width / 2 - 70, ctx.canvas.height / 2 + 40);
    }
  }, [score, gameOver]);

  const update = useCallback((ctx) => {
    if (gameOver) return;

    // Bird physics
    bird.current.velocity += bird.current.gravity;
    bird.current.y += bird.current.velocity;

    // Ground collision
    if (bird.current.y + bird.current.radius > ctx.canvas.height) {
      bird.current.y = ctx.canvas.height - bird.current.radius;
      setGameOver(true);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    }
    // Ceiling collision
    if (bird.current.y - bird.current.radius < 0) {
      bird.current.y = bird.current.radius;
      bird.current.velocity = 0;
    }

    // Pipe generation
    const currentTime = Date.now();
    if (currentTime - lastPipeTimeRef.current > pipeInterval) {
      const topHeight = Math.random() * (ctx.canvas.height - pipeGap - 50) + 20;
      pipes.current.push({
        x: ctx.canvas.width,
        top: topHeight,
        bottom: topHeight + pipeGap,
        passed: false,
      });
      lastPipeTimeRef.current = currentTime;
    }

    // Pipe movement and collision
    pipes.current.forEach(pipe => {
      pipe.x -= pipeSpeed;

      // Collision detection
      if (
        bird.current.x + bird.current.radius > pipe.x &&
        bird.current.x - bird.current.radius < pipe.x + pipeWidth &&
        (
          bird.current.y - bird.current.radius < pipe.top ||
          bird.current.y + bird.current.radius > pipe.bottom
        )
      ) {
        setGameOver(true);
        if (gameLoopRef.current) {
          cancelAnimationFrame(gameLoopRef.current);
        }
      }

      // Score
      if (pipe.x + pipeWidth < bird.current.x && !pipe.passed) {
        setScore(prevScore => prevScore + 1);
        pipe.passed = true;
      }
    });

    // Remove off-screen pipes
    pipes.current = pipes.current.filter(pipe => pipe.x + pipeWidth > 0);

  }, [gameOver]);

  const gameLoop = useCallback((ctx) => {
    update(ctx);
    draw(ctx);
    gameLoopRef.current = requestAnimationFrame(() => gameLoop(ctx));
  }, [update, draw]);

  const resetGame = useCallback((ctx) => {
    bird.current = {
      x: 50,
      y: 150,
      radius: 12,
      velocity: 0,
      gravity: 0.2,
      jump: -5,
    };
    pipes.current = [];
    setScore(0);
    setGameOver(false);
    lastPipeTimeRef.current = Date.now();
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
    gameLoop(ctx);
  }, [gameLoop]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleKeyDown = (e) => {
      if (e.code === 'Space' && !gameOver) {
        bird.current.velocity = bird.current.jump;
      } else if (e.code === 'Space' && gameOver) {
        resetGame(ctx);
      }
    };

    const handleClick = () => {
      if (gameOver) {
        resetGame(ctx);
      } else {
        bird.current.velocity = bird.current.jump;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    canvas.addEventListener('click', handleClick);

    resetGame(ctx); // Start the game when component mounts

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      canvas.removeEventListener('click', handleClick);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameOver, resetGame]);

  return (
    <div className="flappy-bird-container">
      <canvas ref={canvasRef} width="400" height="300"></canvas>
      {gameOver && (
        <button className="restart-button" onClick={() => resetGame(canvasRef.current.getContext('2d'))}>
          Restart Game
        </button>
      )}
    </div>
  );
};

export default FlappyBirdGame;
