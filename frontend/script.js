const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const backgroundMusic = document.querySelector('#background-music');
const gameOverMusic = document.querySelector('#game-over-music');
const restartButton = document.querySelector('#restart-button');
const iniciarMusica = () => {
    backgroundMusic.play();
};

document.addEventListener('keydown', iniciarMusica, { once: true });

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'css/images/game-over.png';
        backgroundMusic.pause();
        gameOverMusic.play();
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        restartButton.style.display = 'block';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
restartButton.addEventListener('click', () => {
    location.reload();
});