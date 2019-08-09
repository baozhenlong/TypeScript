// --- 对象
// 对象是包含一组键值对的实例；值可以是标量、函数、数组、对象等

// 1 --- 定义
{
    let objectName = {
        key1: 'value',
        key2: function () { },
        key3: [],
        key4: {}
    };
}

// 2 --- 类型模板
{
    let names = {
        name1: 'damon',
        name2: 'stefan',
        sayHello: function () { } // 类型模板
    };
    names.sayHello = function () {
        console.log('[类型模板]---hello', names.name1);
    };
    names.sayHello(); // damon
}

// 3 --- 鸭子类型
{
    // 鸭子类型是动态类型的一种风格，是多态的一种形式
    // 在这种风格中，一个对象有效的语义，不是由继承自特定的类或实现特定的接口，而是由“当前方法和属性的集合”决定
    // 可以这样的表述：当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来像鸭子，那么这只鸟就可以被称为鸭子
    // 在鸭子类型中，关注点在于对象的行为，能作什么；而不是关注对象所属的类型
    interface Point {
        x: number,
        y: number
    }

    function addPoints(p1: Point, p2: Point): Point {
        let x = p1.x + p2.x;
        let y = p1.y + p2.y;
        return {
            x,
            y
        };
    }
    let newPoint = addPoints({ x: 1, y: 1 }, { x: 2, y: 2 });
    console.log('[鸭子类型]---', newPoint); // { x: 3, y: 3 }
}