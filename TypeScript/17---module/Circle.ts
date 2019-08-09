import shape = require('./Shape');
export class Circle implements shape.Shape {
    public draw() {
        console.log('Circle is drawn (external module)');
    }
}