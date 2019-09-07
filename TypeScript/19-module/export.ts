// 导出

// 导出声明
// 任何声明（比如变量，函数，类，类型别名，接口）都能够通过添加 export 关键字来导出
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
export const numberRegExp = /^[-9]+$/;
export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
        return s.length === 5 && numberRegExp.test(s);
    }
}
// 导出语句
// 对导出的部分重命名
export { ZipCodeValidator as mainValidator };

// 默认导出
// 每个模块都可以有一个默认导出，默认导出使用 default 关键字标记
// 并且一个模块只能够有一个默认导出
// 值，类，函数声明可以直接被标记为默认导出
export default function sayHi() {
    console.log('hi');
}