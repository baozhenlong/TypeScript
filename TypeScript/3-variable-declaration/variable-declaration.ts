// --- 变量声明

// 1 --- 定义
{
    // 变量是一种使用方便的占位符，用于引用计算机内存地址
    // 可以把变量看做存储数据的容器
}

// 2 --- 命名规则
{
    // 变量名称可以包含数字和字母，除了下划线 ( _ ) 和美元符号 ( $ )外，不能包含其他特殊字符，包括空格
    // 变量名不能以数字开头
}

// 3 --- 声明方式
{
    // 变量使用前必须先声明
    // 3.1 --- 声明变量的类型及初始值
    {
        // var [变量名]: [类型] = 值;
        var test: string = 'test';
    }
    // 3.2 --- 声明变量的类型，但没有初始值，变量值会设置为 undefined
    {
        // var [变量名]: [类型];
        var test: string;
    }
    // 3.3 --- 声明变量并初始值，但不设置类型，该变量可以是任意类型
    {
        // var [变量名] = 值;
        var test = 'test';
    }
    // 3.4 --- 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined
    {
        // var [变量名];
        var test2;
    }
    // 注意：变量不要使用 name ，否则会与 DOM 中的全局 window 对象下 name 属性出现了重名
    // TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误
    // var num: number = 'hello';
}

// 4 --- 类型断言
{
    // 类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
    // <类型> 值
    // 或 值 as 类型
    var str: string = '1';
    var num: number = <number><any>str;
    console.log('[类型断言]---num', num);// 1
    // 它之所以不被称为类型转换，是因为转换通常意味着某种运行时的支持
    // 但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于和分析代码的方法
}

// 5 --- 类型推断
{
    // 当没有类型给出时， TypeScript 编译器利用类型推断来推断类型
    // 如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型
    var num = 2; // number
}

// 6 --- 变量的作用域
{
    // 变量作用域，指定了变量定义的位置
    // 程序中变量的可用性，由变量作用域决定
    // 全局作用域
    {
        // 全局变量定义在程序结构的外部，它可以在代码的任何位置使用
    }
    // 类作用域
    {
        // 这个变量也可以成为字段，类变量声明在一个类里头
        // 但在类的方法外面，该变量可以通过类的对象来访问
        // 类变量也可以是静态的，静态的变量可以通过类名直接访问
        class Numbers {
            num = 13; // 类变量
            static sNum = 10; // 静态变量
            storeNum(): void {
                var localNum = 14; // 局部变量
            }
        }
        console.log('[类作用域]---静态变量', Numbers.sNum); // 10
        var obj = new Numbers();
        console.log('[类作用域]---类变量', obj.num);// 13
    }
    // 局部作用域
    {
        // 局部变量，局部变量只能在声明它的一个代码块中访问
    }
}

// 7 --- 解构
{
    // 7.1 --- 数组解构
    {
        // 解构赋值
        {
            let input = [1, 2];
            let [first, second] = input;
            console.log('[数组解构]---赋值 first', first); // 1
            console.log('[数组解构]---赋值 first', second); // 2
            // 相当于使用索引
            first = input[0];
            second = input[1];
        }
        // 交换变量
        {
            let first = 1;
            let second = 2;
            [second, first] = [first, second];
            console.log('[数组解构]---交换变量 first', first); // 2
            console.log('[数组解构]---交换变量 first', second); // 1
        }
        // 作为函数参数
        {
            function f([first, second]: [number, number]) {
                console.log('[数组解构]---作为函数参数', first);
                console.log('[数组解构]---作为函数参数', second);
            }
            f([1, 2]); // 1 2
        }
        // 在数组里使用 ... 语法创建变量
        {
            let [first, ...rest] = [1, 2, 3, 4];
            console.log('[数组解构]---使用... first', first); // 1
            console.log('[数组解构]---使用... rest', rest); // [ 2, 3, 4 ]
        }
        // 忽略不关心的元素
        {
            let [, , , fourth] = [1, 2, 3, 4];
            console.log('[数组解构]---忽略不关心元素 fourth', fourth); // 4
        }
    }
    // 7.2 对象解构
    {
        // 解构赋值
        {
            let o = {
                a: 'foo',
                b: 12,
                c: 'bar'
            };
            let { a, b } = o;
            console.log('[对象解构]---解构赋值 a', a); // foo
            console.log('[对象解构]---解构赋值 b', b); // 12
            // 创建了变量 a 和变量 b
            // 注意：可以忽略不需要的属性
            ({ a, b } = { a: 'a', b: 2 });
            // 注意：需要用 () 括起来，因为 JavaScript 通常会将 { 起始的语句解析为一个语句块
            console.log('[对象解构]---解构赋值 a', a); // a
            console.log('[对象解构]---解构赋值 b', b); // 2
        }
        // 创建剩余变量
        {
            let { a, ...passthrough } = { a: 'a', b: 2, c: 3 };
            console.log('[对象解构]---创建剩余变量', passthrough); // { b: 2, c: 3 }
        }
        // 属性重命名
        {
            let o = { a: 1, b: 2 };
            let { a: newA, b: newB } = o;
            console.log('[对象解构]---属性重命名 newA', newA);// 1
            console.log('[对象解构]---属性重命名 newB', newB);// 2
            // 指定类型
            let { a: minuteA, b: minuteB }: { a: number, b: number } = o;
            console.log('[对象解构]---属性重命名 minuteA', minuteA);// 1
            console.log('[对象解构]---属性重命名 minuteB', minuteB);// 2
        }
        // 默认值
        {
            // 默认值可以在属性为 undefined 时使用缺省值
            function keepWholeObject(obj: { a: number, b?: number }) {
                let { a, b = 1011 } = obj;
                console.log('[对象解构]---默认值', a);
                console.log('[对象解构]---默认值', b);
            }
            keepWholeObject({ a: 1, b: undefined }); // 1 1011
            keepWholeObject({ a: 1, b: null });// 1 null
            keepWholeObject({ a: 1 }); // 1 1011
        }
    }
    // 7.3 --- 函数声明
    {
        // 解构用于函数声明
        // type 类型别名
        type C = { a: number, b?: number };
        function func({ a, b }: C): void { }
        // 但是，通常情况下，更多的是指定默认值
        function betterFunc({ a = 1, b = 2 } = {}): void { }
    }
}

// 8 --- 展开
{
    // 展开操作符与解构相反
    // 展开运算符允许将一个数组展开为另一个数组，或将一个对象展开为另一个对象
    // 数组
    {
        let first = [1, 2];
        let second = [3, 4];
        let bothPlus = [0, ...first, ...second, 5];
        // 展开操作符创建了 first 和 second 的一份浅拷贝，它们不会被展开操作所改变
        console.log('[展开]---数组', bothPlus); // [ 0, 1, 2, 3, 4, 5 ]
    }
    // 对象
    {
        // 向数组展开一样，它是从左至右进行处理，但结果仍为对象
        // 这意味着出现在展开对象后面的属性会覆盖前面的属性
        let defaults = { a: 1, b: 2, c: 3 };
        console.log('[展开]---对象', { ...defaults, c: 4 }); // { a: 1, b: 2, c: 4 }
        console.log('[展开]---对象', { c: 4, ...defaults }); // { c: 3, a: 1, b: 2 }
        // 对象展开，仅仅包含对象自身的可枚举属性；大体上是说当你展开一个对象实例时，会丢失其方法
        class CC {
            p = 1;
            m() { }
        }
        let c = new CC();
        console.log('[展开]---对象', { ...c }); // { p: 1 }
    }
}

