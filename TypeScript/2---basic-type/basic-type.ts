// --- 基础类型

// 1 --- 任意类型 (any)
{
    // 声明为 any 的变量可以赋予任意类型的值
    // 1.1 --- 什么是任意值类型
    {
        // 如果一个普通类型，在赋值过程中改变类型是不被允许的
        let str: string = '6';
        // str = 6;
        // 编译时错误： Type '6' is not assignable to type 'string'
        // 但如果是 any 类型，则允许被赋值为任意类型
        let anyStr: any = '6';
        anyStr = 6;
    }

    // 1.2 --- 未声明类型的变量
    {
        // 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
        let something;
        something = '6';
        something = 6;
        // 等价于
        let otherthing: any;
        otherthing = '6';
        otherthing = 6;
    }
    // 1.3 --- 常用于以下情况
    {
        // 变量的值会动态改变时
        // 定义存储各种类型数据的数组时
        let arr: any[] = [1, false, '2'];
    }
}

// 2 --- 数字类型 (number)
{
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    // ES6 中的二进制表示法
    let binaryLiteral: number = 0b1010;
    // ES6 中的八进制表示法
    let octalLiteral: number = 0o744;
    let notANumber: number = NaN;
    let infinityNumber: number = Infinity;
}

// 3 --- 字符串类型 (string)
{
    // 一个字符系列，使用单引号( '' )或双引号( "" )来表示字符串类型
    // 反引号(``)来定义多行文本和内嵌表达式
    let myName: string = 'Damon';
    let myAge = 18;
    // 模板字符串
    let sentence = `Hello, my name is ${myName}.
    I'll be ${myAge + 1} years old next month`;
    console.log('[字符串]---sentence', sentence);
    // [字符串]---sentence Hello, my name is Damon.
    // I'll be 19 years old next month
}

// 4 --- 布尔类型 (boolean)
{
    // 表示逻辑值： true 和 false
    let isDone: boolean = false;
    // 注意： 使用构造函数 Boolean 创建的是 Boolean 对象不是布尔值
    // let createByNewBoolean: boolean = new Boolean(1);
    // 编辑时错误：不能将类型 Boolean 分配给类型 boolean
    // 编译时错误： Type 'Boolean' is not assignable to type 'boolean'
    // Boolean 是包装器对象
    // boolean 是基元
    // 直接调用 Boolean 也可以返回一个 boolean 类型
    let createByNewBoolean: boolean = Boolean(1);
    // 在 TypeScript 中， boolean 是 JavaScript 中基本类型， 而 Boolean 是 JavaScript 中的构造函数
    // 其他基本类型（ 除了 null 和 undefined ）一样
}

// 5 --- 数组类型
{
    // 声明变量为数组
    // 在元素类型后面加上[]
    let arr: number[] = [1, 2];
    // 或者使用数组泛型
    let anotherArr: Array<number> = [1, 2];
}

// 6 --- 元组
{
    // 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
    let x: [string, number];
    x = ['str', 1];
    console.log('[元组]---x[0]', x[0]); // str
    // x = [1, 'str'];
    // 报错，位置 0 上应该是 string 类型， 位置 1 上应该是 number 类型
}

// 7 --- 枚举 (enum)
{
    // 枚举类型用于定义数值集合
    enum Color { Red, Green, Blue };
    let c: Color = Color.Blue;
    console.log('[枚举]---c', c); // 2
}

// 8 --- void
{
    // 用于标识方法返回值的类型，表示该方法没有返回值
    let alertName: Function = function alertName(): void {
        alert('My name is Damon');
    }
}

// 9 --- null 和 undefined
{
    // null 和 undefined 只能被赋值给 void 或本身对应的类型
    // null
    // 表示对象值缺失
    let n: null = null;
    // undefined
    // 用于初始化变量为一个未定义的值
    let u: undefined = undefined;
}

// 10 --- never
{
    // never 是其他类型（ 包括 null 和 undefined ）的子类型，代表从不会出现的值
    // 这意味着声明为 nerver 类型的变量只能被 nerver 类型所赋值
    let x: never;
    let y: number;
    // x = y;
    // 不能将类型 number 分配给 never
    y = x;
}

