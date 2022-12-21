let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

canvas.width = window.innerWidth-29;
canvas.height = window.innerHeight-10;

canvas.style.border = "5px solid red"


let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let shapes = [];
shapes.push({x:200,y:100,width:200,height:200,color:'blue'});
shapes.push({x:100,y:200,width:100,height:100,color:'red'});
let mouseDown = (event)=>{
    event.preventDefault();
    console.log(event);
}
canvas.onmousedown = mouseDown;

let drawShapes = ()=>{
    context.clearRect(0,0,canvasWidth,canvasHeight);
    for(let i = 0;i<shapes.length;i++){
        context.fillStyle = shapes[i].color;
        context.fillRect(shapes[i].x,shapes[i].y,shapes[i].width,shapes[i].height);
        console.log(shapes[i].color);
    }
}

drawShapes();
