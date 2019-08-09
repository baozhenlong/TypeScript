/// <reference path = "Shape.ts" />
namespace Drawing {
    export class Triangle implements Shape {
        public draw() {
            console.log('[Triangle]---is drawn');
        }
    }
}

let obj = new Drawing.Triangle();
obj.draw();
// [Triangle]---is drawn