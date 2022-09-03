let playerState = "idle"
const dropdown = document.querySelector("#animations");
dropdown.addEventListener("change", (e) => {
  playerState = e.target.value
})

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let CANVAS_WIDTH = canvas.width = 600
let CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image();
playerImage.src = "assets/shadow_dog.png";

const spriteWith = 575;
const spriteHeight = 523;

let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7
  },
  {
    name: "jump",
    frames: 7
  },
  {
    name: "fall",
    frames: 7
  },
  {
    name: "run",
    frames: 9
  },
  {
    name: "dizzy" ,
    frames: 11
  },
  {
    name: "sit",
    frames: 5
  },
  {
    name: "roll",
    frames: 7
  },
  {
    name: "bite",
    frames: 7
  },
  {
    name: "ko",
    frames: 12
  },
  {
    name: "Get hit",
    frames: 4
  }
]
animationStates.forEach((state, index) => {
  let frames = {
    loc: []
  }
  for(let i = 0; i < state.frames; i++) {
    let positionX = i * spriteWith
    let positionY = index * spriteHeight
    frames.loc.push({x: positionX, y: positionY})
  }
  spriteAnimations[state.name] = frames
})
console.log(spriteAnimations)

function animate() {  
  ctx.clearRect(0 ,0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations[playerState].loc.length;
  let frameX = spriteWith * position;
  let frameY = spriteAnimations[playerState].loc[position].y

  ctx.drawImage(playerImage, frameX, frameY, spriteWith, spriteHeight, 0, 0, spriteWith, spriteHeight)
  if(window.innerWidth < 600) {
    ctx.drawImage(playerImage, frameX, frameY, spriteWith, spriteHeight, 0, 0, spriteWith, spriteHeight)
  }
  gameFrame++
  requestAnimationFrame(animate)
};
animate()

