const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {    
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle, this.fillColor)
        ctx.fillStyle = this.fillColor;
        ctx.fill();
    }
    
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');
const c2 = new Circle(130, 150, 40, 0, 2 * Math.PI, 'red');
const c3 = new Circle(250,250, 60, 0, 2 * Math.PI, 'green');

c1.draw()
c2.draw()
c3.draw()

