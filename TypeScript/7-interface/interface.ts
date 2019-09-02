// 接口
// 接口是一系列抽象方法的声明，是一些方法特性的集合
// 这些方法都应该是抽象的，需要由具体的类去实现
// 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法

// 1 --- 语法
{
    // interface interfaceName { }
    interface IPerson {
        firstName: string;
        lastName: string;
        sayHi: () => string;
    }

    let customer: IPerson = {
        firstName: 'Damon',
        lastName: 'Salvatore',
        sayHi: (): string => 'Hi'
    };
    console.log('[语法]---customer', customer.sayHi()); // Hi
    // 注意：接口不能转换为 JavaScript ，它只是 TypeScript 的一部分
}

// 2 --- 可选属性
{
    // 接口里的属性不全都是必需的
    interface OptionalConfig {
        width?: number;
        heigth?: number
    }
}

// 3 --- 只读属性
{
    // 一些对象属性只能在对象刚刚创建的时候修改其值，可以在属性名前用 readonly 来指定只读属性
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p: Point = { x: 1, y: 2 };
    // p.x = 2; // error
    // readonly vs const
    {
        // readonly ：作为属性
        // const ：作为变量
    }
}

// 4 --- 额外的属性检查
{
    interface SquareConfig {
        color?: string;
        width?: number;
    }
    function createSquare(config: SquareConfig): { color: string, area: number } {
        let o = { color: 'white', area: 100 };
        if (config.width) {
            o.area = config.width * config.width;
        }
        // if (config.colo) {
        //     o.color = config.colo;
        // }
        // error : 属性 colo 不存在
        return o;
    }
    // let mySquare = createSquare({ colo: 'red', width: 100 });
    // 当将对象字面量赋值给变量或作为参数传递的时候，会被特殊对待而且会经过额外属性检查
    // 如果一个对象字面量存在任何”目标类型“不包含的属性时，会得到一个错误
    // 跳过检查的方式
    {
        // 可以使用类型断言绕开这些检查
        {
            let mySquare = createSquare({ colo: 'red', width: 100 } as SquareConfig);
        }
        // 将这个对象字面量赋值给另一个变量，因为不会经过额外属性检查，所以编译器不会报错
        {
            let o = { colo: 'red', width: 100 };
            let mySquare = createSquare(o);
        }
        // 最佳方式：添加一个字符串索引签名；前提是能够确定这个对象可能具有某些作为特殊用途使用的额外属性
        {
            interface BetterSuqareConig {
                color?: string;
                width?: number;
                [propName: string]: any;
            }
            function betterCreateSuqare(config: BetterSuqareConig): { color: string, area: number } {
                let o = { color: 'white', area: 100 };
                if (config.width) {
                    o.area = config.width * config.width;
                }
                if (config.colo) {
                    o.color = config.colo;
                }
                return o;
            }
            let mySquare = betterCreateSuqare({ colo: 'red', width: 100 });
        }
    }
}

// 5 --- 函数类型
{
    // 接口能够描述 JavaScript 中对象拥有的各种各样的外形
    // 除了描述带有属性的普遍对象外，接口也可以描述函数类型
    // 为了使用接口表示函数类型，需要给接口定义一个调用签名
    // 调用签名：就像是一个只有参数列表和返回值类型的函数定义；参数列表里的每个参数都需要名字和类型
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (src: string, sub: string): boolean {
        let result = src.search(sub);
        return result > -1;
    };
    // 对于函数类型的类型检查来说，函数的参数名不需要与接口定义的名字相匹配
    // 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的
    // 如果不指定类型， TypeScript 的类型系统会推断出参数类型
}

// 6 --- 可索引的类型
{
    // 描述那些能够”通过索引得到“的类型，比如 a[10]
    // 可索引类型具有一个索引签名，它描述了对象索引的类型，还有相应的索引返回值类型
    {
        interface StringArray {
            [index: number]: string;
        }
        let myArray: StringArray;
        myArray = ['damon', 'stefan'];
        let myStr: string = myArray[0];
        // 定义了 StringArray 接口，它具有索引签名；这个索引签名表示了当用 number 去索引 StringArray 时，会得到 string 类型的返回值
    }
    // TypeScript 支持两种索引签名：字符串和数字
    {
        // 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
        // 因为当使用 number 来索引时， JavaScript 会将它转换成 string 然后再去索引对象
        // 用 100 去索引等同于使用 "100" 去缩影，因此两者需要保持一致
        interface All {
            [x: number]: number[];
            [x: string]: object;
        }
        // 字符串索引类型能够很好地描述 dictionary 模式，并且会确保所有属性与其返回值类型相匹配
        interface NumberDictionary {
            [index: string]: number;
            length: number; // 可以， length 是 number 类型
            // name: string; // 错误， name 的类型与索引类型返回值的类型不匹配
        }
        // 可以将索引签名设置为只读，这样就防止了给索引赋值
        interface ReadonlyStringArray {
            readonly [index: number]: string;
        }
    }
}

// 7 --- 类类型
{
    // 实现接口
    {
        interface ClockInterface {
            currentTime: Date;
            setTime(d: Date): void;
        }
        class Clock implements ClockInterface {
            currentTime: Date;
            constructor(h: number, m: number) { }
            setTime(d: Date): void {
                this.currentTime = d;
            }
        }
        // 接口描述了类的公共部分，而不是公共和私有来两个部分；它不会检查类是否具有某些私有成员
    }
    // 继承接口
    {
        // 继承使用关键字： extends
        // 单接口继承
        {
            // ChildInterfaceName extends SuperInterfaceName
            interface Person {
                age: number
            }
            interface Musician extends Person {
                instrument: string
            }
            let drummer = <Musician>{};
            drummer.age = 18;
            drummer.instrument = 'drummer';
        }
        // 多接口继承
        {
            // ChildInterfaceName extends SuperInterface1Name, ..., SuperInterfaceNName
            // 继承的各个接口使用逗号 ( , ) 分隔
            interface Parent1 {
                v1: number
            }
            interface Parent2 {
                v2: number
            }
            interface Child extends Parent1, Parent2 { }
            let obj = <Child>{
                v1: 1,
                v2: 2
            };
            console.log('[多接口继承]---obj', obj); // { v1: 1, v2: 2 }
        }
    }
}

// 8 --- 混合类型
{
    interface Counter {
        (start: number): string;
        interval: number;
        reset(): void;
    }
    function getCounter(): Counter {
        let counter = <Counter>function (start: number) {
            console.log('[混合类型]---counter', start);
        };
        counter.interval = 10;
        counter.reset = function () {
            console.log('[混合类型]---reset');

        };
        return counter;
    }
    let c = getCounter();
    c(10); // 10
    c.reset(); // reset
    c.interval = 5;
}

// 9 --- 接口继承类
{
    // 当接口继承了一个类类型时，它会继承类的成员，但不包括其实现
    // 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样
    // 接口同样会继承到类的 private 和 protected 成员
    // 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现
    class Control {
        private state: any;
    }
    interface SelectableControl extends Control {
        select(): void;
    }
    // SelectableControl 包含了 Control 的所有成员，包括私有成员 state
    class Button extends Control implements SelectableControl {
        select() { }
    }
    class TextBox extends Control {
        select() { }
    }
    // 错误： Image 类型缺少 state 属性
    // class Image implements SelectableControl {
    //     select() { }
    // }
}

// 2 --- 联合类型和接口
{
    interface RunOptions {
        program: string,
        commandLine: string | string[] | (() => string)
    }

    // commandLine 是字符串
    let options: RunOptions = {
        program: 'test',
        commandLine: 'Hello'
    };
    console.log('[联合类型接口]---字符串', options.commandLine); // Hello
    // commandLine 是字符串数组
    options = {
        program: 'test',
        commandLine: ['Hello', ' wolrd']
    }
    console.log('[联合类型接口]---字符串数组', options.commandLine); // [ 'Hello', ' wolrd' ]
    // commandLine 是一个函数表达式
    options = {
        program: 'test',
        commandLine: () => 'Hi'
    }
    let func: any = options.commandLine;
    console.log('[联合类型接口]---函数表达式', func()); // Hi
}