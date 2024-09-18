// Get canvas element and its context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Array to store drawn shapes
const shapes = [];

// Function to add a shape to the canvas
function addShape() {
    const shapeType = document.getElementById("shapeType").value;

    // Draw selected shape and add to shapes array
    switch (shapeType) {
        case "rectangle":
            drawRectangle();
            shapes.push("rectangle");
            break;
        case "circle":
            drawCircle();
            shapes.push("circle");
            break;
        case "line":
            drawLine();
            shapes.push("line");
            break;
        default:
            break;
    }
}

// Function to redraw all shapes on the canvas
function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Redraw all shapes in the shapes array
    shapes.forEach(shape => {
        switch (shape) {
            case "rectangle":
                drawRectangle();
                break;
            case "circle":
                drawCircle();
                break;
            case "line":
                drawLine();
                break;
            default:
                break;
        }
    });
}

// Function to draw a rectangle on the canvas
function drawRectangle() {
    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 100, 80); // (x, y, width, height)
}

// Function to draw a circle on the canvas
function drawCircle() {
    ctx.beginPath();
    ctx.arc(200, 150, 50, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

// Function to draw a line on the canvas
function drawLine() {
    ctx.beginPath();
    ctx.moveTo(250, 50); // start point (x, y)
    ctx.lineTo(350, 150); // end point (x, y)
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();
}
