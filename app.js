// -------> Soccer Game
// 1. Dropdown menu that will allow players to select different mode according to the sitautions in the game!
let playerState = `standing`;
const dropdown = document.getElementById(`animations`);
dropdown.addEventListener(`change`, function(e){playerState = e.target.value;
});

//defining the screen area of CANVAS.
const canvas = document.getElementById(`canvas1`)
const ctx = canvas.getContext(`2d`);
const CANVAS_WIDTH = canvas.width = 300;
const CANVAS_HEIGHT = canvas.height = 300;

//selecting playr square image to be displayed on the screa area.

const playerImage = new Image();
playerImage.src = 'Resize Messi.png';
const playerWidth = 250;
const playerHeight = 250;

//using array to name different rows of the image.

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


//Selecting each location cordinates to be passed on to an empty variable using Expression!

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

//Consoling out the process to check for any errors!
console.log(playerAnimations);



//using function to pass on the LOC of each frame in rows.
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % playerAnimations[playerState].loc.length;
    let frameX = playerWidth * position;
    let frameY = playerAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, playerWidth, playerHeight, 0, 0, playerWidth, playerHeight);


   //This will increase the gameFrame.
    gameFrame++;

    //This is a inbuilt canvas funnction to run the animation.
    requestAnimationFrame(animate);
};
animate();
