const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');

class Circle {
    constructor(x, y, radius, startAngle, endAngle, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.color = color;
    }
    draw() {    
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, true)
        ctx.fillStyle = randomColor();
        ctx.fill();
    }
    
}

const c1 = new Circle(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), Math.floor(Math.random() * 170), 0, 2 * Math.PI, randomColor);
c1.draw()

function randomColor(){
    let color = [];
    for(let i=0; i<3; i++) {
        color.push(Math.floor(Math.random() * 256))
        // console.log(color)
    }
    return 'rgb(' + color.join(',') + ')';
}
randomColor()

function mousePos(event){
    const xPosition = event.clientX;
    const yPosition = event.clientY;
    const radius = Math.floor(Math.random() * 170);
    
    const circleAroundCursor = new Circle (xPosition, yPosition, radius, 0, 2 * Math.PI, randomColor);
    circleAroundCursor.draw();
    console.log('mouse working')
}
canvas.addEventListener('mouseover', mousePos)

