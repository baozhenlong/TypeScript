// 声明文件

// 1 --- 全局变量
declare var foo: number;
declare const cFoo: number;

// 2 --- 全局函数
declare function greet(greeting: string): void;

// 3 --- 带属性的对象
declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}

// 4 --- 函数重载
declare function getStr(n: number): string;
declare function getStr(s: string): string[];

// 5 --- 可重用类型
{
    // 接口
    interface GreetingSettings {
        greeting: string;
        duration: number;
        color?: string;
    }
    // 类型别名
    type GreetingLike = string | (() => string);
}

// 6 --- 组织类型
declare namespace GreetingLib {
    interface LogOptions {
        verbose?: boolean;
    }
    interface AlertOptions {
        modal: boolean;
        title?: string;
        color?: string;
    }
}

// 7 --- 类
declare class Greeter {
    constructor(greeting: string);
    greeting: string;
    showGreeting(): void;
}

// 8 --- 规范
// 普通类型
{
    // Number, String, Boolean, Obejct 指的是非原始的装盒对象
}
// 回调函数类型
{
    // 回调函数返回值类型
    {
        // 给返回值被忽略的回调函数设置 void 类型的返回值类型
        function fn(x: () => void) { }
    }
    // 回调函数里的可选参数
    {
        // 最好不要在回调函数里使用可选参数
    }
    // 重载与回调函数
    {
        // 不要因为回调函数参数个数不同而写不同的重载
        // 应该只使用最大参数个数写一个重载
        function beforeAll(action: (done: Function) => void, timeout?: number): void { }
    }
}
// 函数重载
// 排序重载令精确的排在一般的之前
declare function func(x: number): number;
declare function func(x: string): string;
declare function func(x: any): any;
// TypeScript 会选择第一个匹配到的重载当解析函数调用；当前面的重载比后面的“普通”，那么后面的被隐藏了不会被调用
// 当参数个数不同时，可以使用可选参数
// 当参数类型不同时，可以是用联合类型