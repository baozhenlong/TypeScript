// 条件语句
// 条件语句用于基于不同的条件来执行不同的动作
// TypeScript 条件语句是通过一条或多条语句的执行结果( true | false )来决定执行的代码块

// 1 --- if 相关
{
    // 1.1 --- if 语句
    {
        // 只有当指定条件为 true 时，使用该语句来执行代码
        // if (booleanExpr) {
        //     // 在 布尔表达式为 true 时，执行
        // }
        let num: number = 5;
        if (num > 0) {
            console.log('[if]---num 是正数');
        }
    }

    // 1.2 --- if...else 语句
    {
        // 当条件为 true 时，执行 if 代码块，当条件为 false 时，执行 else 代码块
        // if (booleanExpr) {
        //     // 在 布尔表达式 booleanExpr 为 true 时，执行
        // } else {
        //     // 在 布尔表达式 booleanExpr 为 false 时，执行
        // }
        let num: number = 12;
        if (num % 2 === 0) {
            console.log('[if...else]---num 是偶数');
        } else {
            console.log('[if...else]---num 是奇数');
        }
    }

    // 1.3 --- if..else if...else
    {
        // 使用该语句来选择多个代码块之一来执行
        // if (booleanExpr1) {
        //     // 在 布尔表达式 booleanExpr1 为 true 时，执行
        // } else if (booleanExpr2) {
        //     // 在 布尔表达式 booleanExpr2 为 true 时，执行
        // } else if (booleanExpr3) {
        //     // 在 布尔表达式 booleanExpr3 为 true 时，执行
        // } else {
        //     // 在布尔表达式的条件都为 false 时执行
        // }
        let num: number = 2;
        if (num > 0) {
            console.log('[if..else if...else]---num 是正数');
        } else if (num < 0) {
            console.log('[if..else if...else]---num 是负数');
        } else {
            console.log('[if..else if...else]---num 不是正数，也不是负数');
        }
    }

    // 注意：
    // 一个 if 判断语句可以有 0 个或 1 个 else 语句， else 语句必须在 else if 语句后面
    // 一个 if 判断语句可以有 0 个或多个 else if 语句， eles if 语句必须在 else 之前
    // 一旦执行了 else if 内的代码，后面的 else if 或 else 将不再执行
}

// 2 --- switch 语句
{
    // 使用该语句来选择多个代码块之一来执行
    // 一个 switch 语句 允许测试一个变量等于多个值时的情况，每个值称为一个 case
    // 且被测试的变量会对每个 switch case 进行检查
    // switch (expr) {
    //     case constantExpr1:
    //         break; // 可选
    //     case constantExpr2:
    //         break; // 可选
    //     // 可以有任意数量的 case 语句
    //     default: // 可选
    //         break;
    // }
    // switch 语句必须遵循下面的规则
    {
        // expr 是一个常量表达式，必须是一个整型或枚举类型
        // 在一个 switch 中可以有任意数量的 case 语句；每个 case 后面跟一个要比较的值和一个冒号
        // constantExprX 必须与 expr 具有相同的数据类型，且必须是一个常量或字面值
        // 当被测试的变量等于 case 中的常量时， case 后跟的语句将被执行直到遇到 break 语句为止
        // 当遇到 break 语句时， switch 终止，控制流将跳转到 switch 语句后的下一行
        // 不是每一个 case 都需要包含 break ，如果 case 语句不包含 break ，控制流将会继续后续的 case ，直到遇到 break 为止
        // 一个 switch 语句可以有一个可选的 default case ，出现在 switch 的结尾； default case 可用于在上面所有 case 都不为真时执行一个任务
        // default case 中的 break 语句不是必需的
    }
    let grade: string = 'A';
    switch (grade) {
        case 'A': {
            console.log('[switch]---优');
            break;
        }
        case 'B':
            console.log('[switch]---良');
            break;
        case 'C':
            console.log('[switch]---及格');
            break;
        case 'D':
            console.log('[switch]---不及格');
            break;
        default:
            console.log('[switch]---非法输入');
            break;
    }
}