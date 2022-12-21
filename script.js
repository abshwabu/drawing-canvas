let canvas = document.getElementById('canvas');
canvas.width = window.innerWidth - 80;
canvas.height = 400;

let context = canvas.getContext('2d')

context.fillStyle = 'white';
context.fillRect(0,0,canvas.width,canvas.height);

let drawingColor = 'blue';
let drawWidth = '2px';
let isDrawing = 'false';

let restoreArray = [];
let index =-1;

function changeColor(event) {
    drawingColor = event.style.background;
}

canvas.addEventListener('touchstart',start,false)
canvas.addEventListener('touchmove',draw,false)
canvas.addEventListener('mousedown',start,false)
canvas.addEventListener('mousemove',draw,false)

canvas.addEventListener('touchend',stop,false)
canvas.addEventListener('mouseup',stop,false)
canvas.addEventListener('mouseout',stop,false)


function start(event){
    isDrawing = true;
    context.beginPath();
    context.moveTo(event.clientX - canvas.offsetLeft,event.clientY - canvas.offsetTop);
    event.preventDefault();

}
function draw(event){
    if(isDrawing){
        context.lineTo(event.clientX - canvas.offsetLeft,event.clientY-canvas.offsetTop)
        context.strokeStyle = drawingColor;
        context.lineWidth = drawWidth;
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.stroke();
    }
    event.preventDefault();

}
function stop(event) {
    if(isDrawing){
        context.stroke();
        context.closePath();
        isDrawing = false;

    }
    event.preventDefault();

    if (event.type != 'mouseout'){
        restoreArray.push(context.getImageData(0,0,canvas.width,canvas.height));
        index += 1
        console.log(restoreArray);
    }
}
function clearAll(){
    context.fillStyle = 'white';
    context.clearRect(0,0,canvas.width,canvas.height);
    context.fillRect(0,0,canvas.width,canvas.height);
    index = -1
    restoreArray = []

}

function undoLast(){
    if (index <= 0) {
        clearAll();
    } else{
        index -= 1;
        restoreArray.pop();
        context.putImageData(restoreArray[index],0,0);
    }
}