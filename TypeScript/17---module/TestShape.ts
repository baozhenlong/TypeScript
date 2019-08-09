import shape = require('./Shape');
import circle = require('./Circle');
import triangle = require('./Triangle');

function drawAllShapes(shape: shape.Shape) {
    shape.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());