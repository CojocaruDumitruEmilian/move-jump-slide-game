var square =document.querySelector('.square');
var grid=document.querySelector('.grid');
var bottom =0;
let isJumping=false;
let isGoingLeft=false;
var newBottom;
let left=0;
let right=0;
let leftTimerId;
var a;
var b;
let c;
var timerDownId;
var computedStyle1;
var timer;


function jump() {
    if(isJumping) return
let timerUpId=setInterval(function () {
if(bottom>250){
clearInterval(timerUpId);
 timerDownId=setInterval(function () {
    if(bottom<0){
        clearInterval (timerDownId);
        isJumping=false;
    }
    bottom-=5;
    square.style.bottom=bottom + 'px';
    onGrid();
    
},20)
} 
isJumping=true;
bottom += 30 ;
square.style.bottom=bottom + 'px';
},20)
}

function slideLeft () {
        left-=10;
        square.style.left=left+'px';
}

function slideRight () {
    left+=10;
    square.style.left=left+'px';
}

function controller(e) {
    if(e.keyCode===32) {
        jump();
    }
    else if(e.keyCode===37) {
       slideLeft();
    }
    else if(e.keyCode===39){
        slideRight();
    }
}

function onGrid () {
    computedStyle1 = window.getComputedStyle(square);
 a=parseInt(computedStyle1.left, 10);
 b=parseInt(computedStyle1.bottom, 10);
if(a >= 10 && a <= 600 && b==120){
    clearInterval (timerDownId);
    aux();
}
}

function aux(){
    timer=setInterval(function () {
        c=parseInt(computedStyle1.left, 10);
        if(c<=0 || c>=600){
            console.log(c);
            bottom-=5;
            square.style.bottom=bottom + 'px';
            if(bottom<=0){
            clearInterval(timer);
            isJumping=false;
        } 
    }
    },20)
}
   


document.addEventListener('keydown',controller);