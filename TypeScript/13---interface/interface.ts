// --- 接口
// 接口是一系列抽象方法的声明，是一些方法特性的集合
// 这些方法都应该是抽象的，需要由具体的类去实现
// 然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法

// 1 --- 语法
{
    // interface interfaceName { }
    interface IPerson {
        firstName: string,
        lastName: string,
        sayHi: () => string
    }

    let customer: IPerson = {
        firstName: 'Damon',
        lastName: 'Salvatore',
        sayHi: (): string => 'Hi'
    };
    console.log('[语法]---customer', customer.sayHi()); // Hi
    // 注意：结构不能转换为 JavaScript ，它只是 TypeScript 的一部分
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

// 3 --- 接口和数组
{
    // 接口中可以将数组的索引值和元素设置为不同类型，索引值可以是数字或字符串
    // FIXME 报错
    // interface nameList {
    //     [index: number]: string
    // }
    // let list1: nameList = ['Damon', 'Stefan'];

    // interface ageList {
    //     [index: string]: number
    // }
    // let list2: ageList;
    // // list2[list1[0]] = 20;
    // // list2[list1[1]] = 18;
    // console.log('[接口和数组]---', list2);
}

// 4 --- 接口继承
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