let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

//-----------------------------------

var targets=[];
var distance=0;
var shotTargets=[];
var score=0;
var stop = false;
var typedWord="";

//-----------------------------------

var colorName = [
    "Red",
    "Green",
    "Blue",
    "Black",
    "Pink",
    "Brown",
    "Gold",
    "Purple",
    "Cyan",
    "Orange"
]

//-----------------------------------

var state = {
    start:function () {
        document.addEventListener("keyup",onType,event);
        document.addEventListener("click",onClick,event);
        requestAnimationFrame(state.update);
    },
    update:function() {
        stop = false;
        ctx.clearRect(0, 0, 1000, 500);
        if(targets.length==0 || targets[targets.length-1].y>=distance){
            var t=new target();
            targets.push(t);
            distance=Math.floor(Math.random()*120);
        }
        for(let i=0;i<targets.length;i++) targets[i].draw();
        
        if(!stop){
            requestAnimationFrame(state.update);
        }
    },
    stop:function() {
        ctx.fillStyle="red";
        ctx.globalAlpha=0.5;
        ctx.fillRect(0, 0, 1000, 500);
    }
}

state.start();

function target() {
    this.text=colorName[Math.floor(Math.random() * colorName.length)];
    this.color=colorName[Math.floor(Math.random() * colorName.length)];
    this.x=Math.floor(Math.random()*800);
    this.y=0;
    
    this.draw=function() {
        ctx.fillStyle=this.color;
        ctx.font="16px Arial";
        ctx.fillText(this.text, this.x, this.y);
        this.y+=Math.floor(Math.random() * 2) + 0.1;
        if(this.y >= 500) {
            stop = true;
            state.stop();
        }
    }
}

function onType(e) {
    const keyPressed = e.code;
    const letter = keyPressed.substr(-1);
    typedWord += letter;

    if(keyPressed == 'Space') {
        typedWord = "";
    }

    console.log(typedWord);
}

function targetGone(){
    for(let i=0;i<targets.length;i++)
        if(targets[i].y>400) return true;
}

function onClick(event) {
    x=event.clientX-canvas.offsetLeft;
    y=event.clientY-canvas.offsetTop;
    console.log(x,y);
}
