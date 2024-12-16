
let playerState = `standing`;
const dropdown = document.getElementById(`animations`);
dropdown.addEventListener(`change`, function(e){playerState = e.target.value;
});
const canvas = document.getElementById(`canvas1`)
const ctx = canvas.getContext(`2d`);
const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGHT = canvas.height = 300;

const playerImage = new Image();
playerImage.src = 'Resize Messi.png';
const playerWidth = 250;
const playerHeight = 250;

let gameFrame = 0;
const staggerFrames = 8;
const playerAnimations = [];
const animationStates = [
    {
        name : `standing`,
        frames : 5,
    }, 
    {
        name: `dribbling`,
        frames: 6,
    },
    {
        name : `walking`,
        frames : 5,
    }, 
    {
        name: `running`,
        frames: 6,
    }
];
animationStates.forEach((state, index) => {
    let frames = { 
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * playerWidth;
        let positionY = index * playerHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    playerAnimations[state.name] = frames;
});
console.log(playerAnimations);


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % playerAnimations[playerState].loc.length;
    let frameX = playerWidth * position;
    let frameY = playerAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, playerWidth, playerHeight, 0, 0, playerWidth, playerHeight);
   

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
