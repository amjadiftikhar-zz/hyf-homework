class Circle {
	constructor(radius) {
		this.radius = radius;
	}

	getArea() {
		return Math.PI * this.radius * this.radius;
	}
	getCircumference() {
		return 2 * Math.PI * this.radius;
	}
	getDiameter() {
		return 2 * this.radius;
	}
}
const bigCircle = new Circle(20); // Area: 1256.64, Circumference: 125.66, Diameter: 40.00}
console.log(`Circle1: 
    {Area: ${bigCircle.getArea().toFixed(2)}  
    Circumference: ${bigCircle.getCircumference().toFixed(2)} 
    Diameter: ${bigCircle.getDiameter().toFixed(2)}}`);

const mediumCircle = new Circle(15); // Area: 706.86, Circumference: 94.25, Diameter: 30.00
console.log(`Circle2: {Area: ${mediumCircle.getArea().toFixed(2)}  
    Circumference: ${mediumCircle.getCircumference().toFixed(2)} 
    Diameter: ${mediumCircle.getDiameter().toFixed(2)}}`);

const smallCircle = new Circle(10); // Area: 314.16, Circumference: 62.83, Diameter: 20.00
console.log(`Circle3: {Area: ${smallCircle.getArea().toFixed(2)}  
    Circumference: ${smallCircle.getCircumference().toFixed(2)} 
    Diameter: ${smallCircle.getDiameter().toFixed(2)}}`);
