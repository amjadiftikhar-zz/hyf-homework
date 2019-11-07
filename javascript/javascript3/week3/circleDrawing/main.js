/*First add the canvas element to your html. Now draw a circle on the canvas using js. Google is your friend here :)
When you have added a normal circle, try filling it out so it has a color. Again google time!*/

const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.arc(100, 100, 75, 0, 2 * Math.PI);
ctx.fillStyle = 'green';
ctx.fill();

