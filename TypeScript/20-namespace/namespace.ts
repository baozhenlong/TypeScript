// 命名空间
// 命名空间一个最明确的目的：解决重命名问题
// 命名空间定义了标识符的可见范围，一个标识符可在多个命名空间中定义，它在不同命名空间中的含义是不互相干的

// TypeScript 中命名空间使用 namespace 来定义
namespace SomeNamespaceName {
    const num = 11;
    export interface SomeInterfaceName { }
    export class SomeClassName { }
    // export 让这些接口和类型在命名空间之外也是可以访问的
}
// 在另一个命名空间调用语法格式
SomeNamespaceName.SomeClassName;

// 多文件中的命名空间
// 把一个命名空间分割成多个文件；尽管是不同的文件，它们仍是同一个命名空间，并且在使用的时候就如同它们在一个文件中定义的一样
// 因为不同文件之间存在依赖关系，所以加入了引用签名来告诉编译器文件之间的关联
// 如果一个命名空间在一个单独的 TypeScript 文件中，则应使用三斜杠 /// 引用它，
// // / <reference path = "SomeFileName.ts" />

// Todo ??? 找不到命名空间
/// <reference path = "validation.ts" />
/// <reference path = "numbers-validation.ts" />
/// <reference path = "letters-validation.ts" />
let strings = ['hi', '12', 'z1'];
// let validator: { [s: string]: Validation.StringValidator };
// let validator: { [s: string]: Validation.StringValidator };
// validator['numbers'] = new Validation.NumbersValidation();
// validator['letters'] = new Validation.LettersValidation();
// for (let s of strings) {
//     for (let name in validator) {
//         console.log('name =', name, ', is match ', validator[name].isAccepttable(s));
//     }
// }