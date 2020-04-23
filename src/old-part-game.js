const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

//-----------------------------------

let casinoState = 1;
let stageState = 1;
let gameState = 1;

let stopCasino = false;
let stopGame = false;

let casinoTimer = Math.floor(Math.random() * 300) + 180;

//-----------------------------------

let timer = 1;
let hat = 1;
let head = 1;
let torso = 1;
let leg = 1;

//-----------------------------------

const startGame = () => {
    document.addEventListener("click",onClick,event);
    drawTarget();
    drawCasino();
}

const drawTarget = () => {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillStyle='black';
    ctx.font="20px Arial";
    ctx.fontWeight=800;
    ctx.fillText(random6(), 150, 100);
    ctx.fillText(random6(), 150, 200);
    ctx.fillText(random6(), 150, 300);
    ctx.fillText(random6(), 150, 400);
}

const drawCasino = () => {
    if(!stopCasino) {
        casinoY = casinoState * 100;
        ctx.clearRect(300, casinoY-100, 500, 500);
        ctx.fillStyle='black';
        ctx.font="20px Arial";
        ctx.fontWeight=800;
        ctx.fillText(timer, 300, casinoY);
        
        if(timer == 6) {
            timer = 1;
        } else {
            timer++;
        }

        hat = timer;
        
        setTimeout(function() {
            drawCasino();
        }, casinoTimer);

        if (casinoState == 5) {
            ctx.clearRect(300, 0, 500, 500);
            casinoState = 1;
            drawTarget();
        }
    } else {
        stopCasino = false;
        drawCasino();
    }
}

const updateGame = () => {
    
}

const stopCasinoGame = () => {
    ctx.fillStyle="red";
    ctx.globalAlpha=0.5;
    ctx.fillRect(0, 0, 1000, 500);
}

const onClick = (e) => {
    // console.log(hat-1);
    
    if(!stopCasino) {
        stopCasino = true;
        casinoState++;
        casinoTimer = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
    }
}

const random6 = () => {
    return Math.floor(Math.random() * 6) + 1;
}

//-----------------------------------

startGame();
