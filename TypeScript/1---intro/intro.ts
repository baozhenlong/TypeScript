// --- 简介

// 1 --- 什么是 TypeScript
{
    // TypeScript 是 JavaScript 的一个超集
    // 主要提供了类型系统和对 ES6 的支持，它由 Microsoft 开发，代码开源于 GitHub 上
}
// 2 ---安装 TypeScript
{
    // 2.1 --- 命令行工具安装方法
    {
        // npm install -g typescript
        // 全局环境下安装 tsc 命令
    }
    // 2.2 --- 编译一个 TypeScript 文件
    {
        // tsc hello.ts
    }
    // 2.3 --- 编辑器
    {
        // Visual Studio Code
    }
}
// 3 --- 简单例子
{
    let sayHello: Function = function sayHello(person: string) {
        console.log('Hello,', person);
    }
    let person = 'damon';
    // let person = [1, 2, 3];
    sayHello(person);
    // TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以
    // TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错
    // 当把 person 初始化为数组时，编辑器中会提示错误，编译时也会出错
    // 编辑时错误：类型 number[] 的参数不能赋值给类型 string 的参数
    // 编译时错误： Argument of type 'number[]' is not assignable to parameter of type 'string'
    // 但是还是生成了 js 文件
    // TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件
    // 如果要再报错的时候终止文件的生成，可以在 tsconfig.json 中配置noEmitOnError 即可
}