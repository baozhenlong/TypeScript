/// <reference path="Shape.ts" />
namespace Drawing {
    export class Circle implements Shape {
        public draw() {
            console.log('[Circle]---is drawn');
        }
    }
}