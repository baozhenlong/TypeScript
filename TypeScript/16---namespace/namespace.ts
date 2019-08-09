// --- 命名空间
// 命名空间一个最明确的目的：解决重命名问题
// 命名空间定义了标识符的可见范围，一个标识符可在多个命名空间中定义，它在不同命名空间中的含义是不互相干的


// TypeScript 中命名空间使用 namespace 来定义
namespace SomeNamespaceName {
    export interface SomeInterfaceName { }
    export class SomeClassName { }
}
// 在另一个命名空间调用语法格式
SomeNamespaceName.SomeClassName;
// 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它
// // / <reference path = "SomeFileName.ts" / >