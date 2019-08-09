// --- 类
// TypeScript 是面向对象的 JavaScript
// 类描述了所创建的对象共同的属性和方法
// TypeScript 支持面向对象的所有特性，比如，类、接口等

// 1 --- 语法
{
    // class className {
    // 类作用域
    // }
    // 定义类的关键字为 class ，后面紧跟类名，类可以包含以下几个模块（类的数据成员）
    {
        // 字段：是类里面声明的变量；字段表示对象的有关数据
        // 构造函数：类实例化时调用；可以为类的对象分配内存
        // 方法：是对象要执行的操作
    }
    class Person { }
}

// 2 --- 完整实例
{
    // this 关键字表示当前类实例化的对象

    // 创建类的数据成员
    class Car {
        // 字段
        engine: string
        // 构造函数
        constructor(engine: string) {
            this.engine = engine;
        }
        // 方法
        disp(): void {
            console.log('[访问方法]---disp engine', this.engine);
        }
    }

    // 创建实例化对象
    // 使用 new 关键字来实例化类的对象
    // let objectName = new className([arguments]);
    // 类实例化会调用构造函数
    let obj = new Car('Engine 1');

    // 使用 . 操作符来访问类中的字段属性和方法
    console.log('[访问属性]---engine', obj.engine); // Engine 1
    obj.disp(); // Engine 1
}

// 3 --- 类的继承
{
    // 类继承使用关键字 extends ，子类除了父类的私有成员（方法和属性）和构造函数，其他的都可以继承
    // 注意：子类只能继承一个父类， TypeScript 不支持继承多个类，但支持多重继承
    // class ChildCalssName extends ParentClassName
    class Shape {
        Area: number
        constructor(a: number) {
            this.Area = a;
        }
    }
    class Circle extends Shape {
        disp(): void {
            console.log('[类的继承]---Circle Area', this.Area);
        }
    }
    let obj = new Circle(100);
    obj.disp(); // 100
}

// 4 --- 继承类的方法重写
{
    // 类继承后，子类可以对分类的方法重新定义，这个过程称之为方法的重写
    // 其中 super 关键字是对父类的直接引用，该关键字可以引用父类的属性和方法
    class PrinterClass {
        print(): void {
            console.log('[继承类的方法重写]---父类');
        }
    }
    class StringPrinter extends PrinterClass {
        print(): void {
            super.print();
            console.log('[继承类的方法重写]---子类');
        }
    }
    let obj = new StringPrinter();
    obj.print();
    // 父类
    // 子类
}

// 5 --- static 关键字
{
    // static 关键字用于定义类的数据成员（属性和方法）为静态的，静态成员可以直接通过类名调用
    class StaticMem {
        static num: number
        static disp(): void {
            console.log('[static]---', StaticMem.num);
        }
    }
    // 初始化静态变量
    StaticMem.num = 1;
    // 调用静态方法
    StaticMem.disp(); // 1
}

// 6 --- instanceof 运算符
{
    // instanceof 运算符用于判断对象是否是指定的类型，如果是返回 true ，否则返回 false
    class Person { }
    let obj = new Person();
    console.log('[instanceof]---', obj instanceof Person); // true
}

// 7 --- 访问控制修饰符
{
    // 在 TypeSCript 中，可以使用访问控制修饰符来保护对类、变量、方法、构造函数的访问
    // 3 种不同的访问权限
    {
        // public ： 默认，公有，可以在任何地方被访问
        // protected ： 受保护，可以被其自身以及其子类和父类访问
        // private ： 私有，只能被其定义所在的类访问
    }
}

// 8 --- 类和接口
{
    // 类可以实现接口，使用关键字 implements ，并将 interest 字段作为类的属性使用
    interface Person {
        age: number
    }
    class Teacher implements Person {
        age: number
        constructor(age: number) {
            this.age = age;
        }
    }
    let obj = new Teacher(18);
    console.log('[类和接口]---age', obj.age); // 18
}