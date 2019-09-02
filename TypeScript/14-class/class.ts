// 类
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
    // 类继承后，子类可以对父类的方法重新定义，这个过程称之为方法的重写
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
        // private ： 私有，只能被其定义所在的类访问，不能在声明它的类的外部访问
    }
    // 类型兼容
    {
        // TypeScript 使用的是结构性类型系统
        // 当比较两种不同的类型时，并不在乎它们从何而来，如果所有成员的类型都是兼容的，则认为它们的类型是兼容的
        // 然而，比较带有 private 或 protected 成员的类型时候，情况就不同了
        {
            // 如果其中一个类型里包含一个 private 成员，那么只有当另一个类型中也存在这样一个 private 成员
            // 并且它们都是来自同一处声明时，才认为这两个类型是兼容的；对于 protected 成员也使用这个规则
        }
        class Animal {
            private name: string;
            constructor(name: string) {
                this.name = name;
            }
        }
        class Dog extends Animal {
            constructor() {
                super('dog');
            }
        }
        class Cat {
            private name: string;
            constructor(name: string) {
                this.name = name;
            }
        }
        let animal = new Animal('animal');
        let dog = new Dog();
        let cat = new Cat('cat');
        animal = dog;
        // animal = cat; // Animal 与 Cat 不兼容
    }
    // readonly 修饰符
    {
        // 将属性设置为只读的
        // 只读属性必须在声明时或构造函数里被初始化
        class readonlyTest {
            readonly name: string;
            readonly num: number = 18;
            constructor(name: string) {
                this.name = name;
            }
        }
        // 参数属性
        class paramPropertyTest {
            readonly num: number = 18;
            constructor(readonly name: string, public pub: string, protected pro: string, private pri: string) { }
        }
        // 参数属性通过给构造函数参数前面添加一个 readonly 或访问限定符来声明
        // 使用 readonly 限定一个参数属性会声明并初始化一个可读成员；对于 public protected private 也一样
    }
}

// 8 --- 存取器
{
    // TypeScipt 支持通过 getter / setter 来截取对对象成员的访问，能有效地控制对象成员的访问
    class Employee {
        name: string;
    }
    let employee = new Employee();
    employee.name = 'damon';
    let passcode = 'secret passcode';
    class AccessorEmployee {
        private _name: string;
        get name(): string {
            return this._name;
        }
        set name(newName: string) {
            if (passcode && passcode === 'secret passcode') {
                this._name = newName;
            } else {
                console.log('[存取器]---error: unauthorized update of employee');
            }
        }
    }
    let employee2 = new AccessorEmployee();
    employee2.name = 'stefan';
    // 注意
    {
        // 只带有 get 不带有 set 的存取器自动被推断为 readonly
    }
}

// 9 --- 静态属性
{
    // 静态属性存在于类本身上面而不是类的实例上
    class Point {
        static size: number = 10;
        constructor(x: number, y: number) { }
    }
    console.log('[静态属性]---size', Point.size); // 10
    // 使用 类名.属性名 访问静态属性
    // 使用 this.属性名 访问实例属性
}

// 10 --- 抽象类
{
    // 抽象类做为其他派生类的基类使用；它们一般不会直接被实例化
    // 不同于接口，抽象类可以包含成员的实现细节
    // abstract 关键字用于定义抽象类和在抽象类内部定义抽象方法
    abstract class AbstractAnimal {
        abstract makeSound(): void;
        move(): void {
            console.log('[抽象类]---roaming');
        }
    }
    // 抽象类中抽象方法不包含具体实现并且必须在派生类中实现
    // 抽象方法的的语法与接口方法类似，两者都是定义方法签名但不包含方法体
    // 抽象方法必须包含 abstract 关键字，并且可以包含访问修饰符
    abstract class Department {
        constructor(public name: string) { }
        printName(): void {
            console.log('[抽象类]---department name', this.name);
        }
        // 抽象方法必须在派生类中实现
        abstract printMeeting(): void;
    }
    class AccountingDepartment extends Department {
        constructor() {
            super('Accounting');
        }
        printMeeting() {
            console.log('[抽象类]---Acounting meeting hi');
        };
        ownMethod(): void { }
    }
    // 允许创建一个对抽象类型的引用
    let department: Department;
    // 不能创建一个抽象类的实例
    // let departmentInstance = new Department();
    // 允许对一个抽象子类进行实例化和赋值
    department = new AccountingDepartment();
    department.printName(); // department name Accounting
    department.printMeeting(); // Acounting meeting hi
    // department.ownMethod(); // 抽象类中不存在 ownMethod 方法
    let accountingDepartment = new AccountingDepartment();
    accountingDepartment.ownMethod();
}

// 11 --- 类和接口
{
    // 类可以实现接口，使用关键字 implements ，并将 interest 字段作为类的属性使用
    {
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
    // 可以把类当作接口使用
    {
        // 类定义会创建两个东西：类的实例类型和一个构造函数
        // 因为类可以创建出类型，所以能够在允许使用接口的地方使用类
        class Point2d {
            x: number;
            y: number;
        }
        interface Point3d extends Point2d {
            z: number;
        }
        let point: Point3d = { x: 1, y: 2, z: 3 };
    }
}