
// 导入
// 使用以下 import 形式之一来导入其它模块中的导出内容

// 导入一个模块中的某个导出内容，可以对导入内容重命名
import sayHi, { ZipCodeValidator, mainValidator } from "./export";
let myValidator = new ZipCodeValidator();
import { ZipCodeValidator as ZSV } from "./export";
let zsv = new ZSV();
sayHi();