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
    function say_hello(person) {
        console.log('hello,', person);
    }
    // let person = 'damon';
    var person = [1, 2, 3];
    say_hello(person);
    // TypeScript 中，使用 : 指定变量的类型，: 的前后有没有空格都可以
    // TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错
}