import shape = require('./Shape');
export class Triangle implements shape.Shape {
    public draw() {
        console.log('Triangle is drawn (external mudule)');
    }
}