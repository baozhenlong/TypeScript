// 循环

// 1 --- for 循环
{
    // for 循环用于多次执行一个语句序列，简化管理循环变量的代码
    // for (init; condition; increment) {
    //     statement(s);
    // }
    // for 循环的控制流程解析
    {
        // 1
        {
            // init 会首先被执行，且只会执行一次
            // 这一步允许声明并初始化任何循环控制变量
            // 也可以不在这里写任何语句，只要有一个分号出现即可
        }
        // 2
        {
            // 判断 condition
            // 如果为 true ，则执行循环主体
            // 如果为 false ，则不执行循环主体，且控制流会跳转到紧接着 for 循环的下一条语句
        }
        // 3
        {
            // 在执行完 for 循环主体后，控制流会跳回上面的 increment 语句
            // increment 语句允许更新循环控制变量，该语句可以留空，只要在条件后有一个分号出现即可
        }
        // 4
        {
            // 条件再次被判断
            // 如果为 true ，则执行循环，这个过程会不断重复（循环主体，然后增加步值，再然后重新判断条件）
            // 如果为 false ， 则终止循环
        }
    }
    // statement() 可以是一个单独的语句，也可以是几个语句组成的代码块
    // condition 可以是任意的表达式，当条件为 true 时，执行循环；当条件为 false 时，退出循环
    let num: number = 5;
    let factorial: number = 1;
    for (let i: number = num; i >= 1; i--) {
        factorial *= i;
    }
    console.log('[for]---factorial', factorial); // 120
}

// 2 --- for...in 循环
{
    // for...in 语句用于一组值的集合或列表进行迭代输出
    // for (let key: string | any in list) {
    //     // 语句
    // }
    // key 需要为 string 或 any 类型
    let str: any = 'abc';
    let key: any;
    for (key in str) {
        console.log('[for...in]---key', str[key]);
    }
    // a
    // b
    // c
}

// 3 --- for...of 循环
{
    // for...of 允许遍历 Arrays （数组）、 Strings （字符串）、 Maps （映射）、 Sets （集合）等可迭代的数据结构
    let someArray = [1, 'str', false];
    for (let entry of someArray) {
        console.log('[for...of]---entry', entry);
    }
    // 1
    // str
    // false
}

// 4 --- forEach 循环
{
    let list = [1, 2, 3];
    list.forEach((value, index, array) => {
        // value 当前值
        // index 当前索引
        // array Array
    });
}

// 5 --- while 循环
{
    // while 语句在给定条件为 true 时，重复执行语句或语句组
    // 循环主体执行之前会先测试条件
    // while (condition) {
    //     statement()
    // }
    // statement 可以是一个单独的语句，也可以是几个语句组成的代码块
    // condition 可以是任意的表达式，当条件为 true 时执行循环；当条件为 false 时，程序流将退出循环
    let num: number = 5;
    let factorial: number = 1;
    while (num >= 1) {
        factorial *= num;
        num--;
    }
    console.log('[while]---factorial', factorial); // 120
}

// 6 --- do...while 循环
{
    // for while 循环，在循环头部测试循环条件
    // do...while 循环，在循环尾部测试循环条件
    // do {
    //     statement();
    // } while (condition);
    // 注意，条件条件表达式出现在循环的尾部，所以循环中的 statement 会在条件被测试之前至少执行一次
    // 如果条件为 true ，控制流会跳转回上面的 do ，然后重新执行循环中的 statement ；这个过程不断重复，直到给定条件变为 false 为止
    let num: number = 2;
    do {
        num--;
        console.log('[do...while]---num', num);
    } while (num >= 0);
    // 1
    // 0
    // -1
}

// 7 --- break 语句
{
    // 用法
    {
        // 1
        // 当 break 语句出现在一个循环内时，循环会立即终止，且程序流将继续执行紧接着循环的下一条语句
        // 2
        // 终止 switch 语句中的一个 case
    }
    // 如果使用的是嵌套循环， break 语句会停止执行最内层的循环，然后开始执行该块之后的下一行代码
}

// 8 --- continue 语句
{
    // continue 会跳过当前循环中的代码，强迫下一次循环
    // 对于 for 循环， continue 语句执行后，自增语句仍然会执行
    // 对于 while 和 do...while 循环， continue 语句重新执行条件判断语句
}

// 9 --- 无限循环
{
    // 无限循环就是一直在运行不会停止的循环
    // for 和 while 都可以创建无限循环
    // for (; ;) {
    //     // 这段代码会不停地执行
    // }
    // while (true) {
    //     // 这段代码会不停地执行
    // }
}