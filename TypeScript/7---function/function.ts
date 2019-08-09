// --- 函数
// 函数是一组一起执行一个任务的语句
// 函数声明告诉编译器函数的名称、返回类型、参数
// 函数定义提供了函数的实际主体

// 1 --- 函数定义
{
    // 函数就是包裹在花括号中的代码块，前面使用了关键字 function
    // function functionName() { }
    function log() { } // 函数定义
}

// 2 --- 调用函数
{
    // 函数只有通过调用才可以执行函数内的代码
    // functionName();
    function sayHi() {
        console.log('[调用函数]---sayHi');
    }
    sayHi(); // sayHi
}

// 3 --- 函数返回值
{
    // 可以使用 return 语句将执行的结果返回到调用它的地方
    // 使用 return 语句时，函数会停止执行，并返回指定的值
    // function functionName(): returnType {
    //     return value;
    // }
    // returnType 返回值的类型
    // return 关键字后跟这要返回的结果
    // 一个函数只能有一个 return 语句
    // 返回值的类型需要与函数定义的返回类型 (returnType) 一致
    function greet(): string {
        return 'Hi';
    }
    console.log('[函数返回值]---greet', greet()); // Hi
}

// 4 --- 带参数函数
{
    // 在调用函数时，可以向其传递值，这些值被称为参数，这些参数可以在函数中使用
    // 可以向函数传递多个参数，每个参数使用逗号 ( , ) 分隔
    // function functionName(param1 [: type], param2 [: type]) { }
    // paramX 参数名
    // type 参数类型
    function add(x: number, y: number) {
        return x + y;
    }
    console.log('[带参数函数]---add', add(1, 2)); // 3
}

// 5 --- 可选参数和默认参数
{
    // 可选参数
    {
        // 可选参数用问号 ( ? ) 标识
        // 可选参数必须跟在必需参数后面
        function buildName(firstName: string, lastName?: string) {
            let name = firstName;
            if (lastName) {
                name += lastName;
            }
            return name;
        }
        console.log('[可选参数]---firstName', buildName('Damon')); // Damon
        console.log('[可选参数]---firstName and lastName', buildName('Damon', 'Salvatore')); // DamonSalvatore
    }
    // 默认参数
    {
        // 设置参数的默认值，这样在调用函数的时候，如果不传入该参数的值，则使用默认参数
        // function functionName(param1 [: type], param2 [: type] = defaultValue) { }
        // 注意：参数不能同时设置为可选和默认
        function caculateDiscount(price: number, rate: number = 0.5) {
            console.log('[默认参数]---discount', price * rate);
        }
        caculateDiscount(100); // 50
        caculateDiscount(100, 0.3); // 30
    }
}

// 6 --- 剩余参数
{
    // 将不确定数量的参数作为一个数组传入
    function addNumbers(...nums: number[]) {
        let i: number;
        let sum: number = 0;
        for (i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        console.log('[剩余参数]---sum', sum);
    }
    addNumbers(1, 2, 3); // 6
    addNumbers(10, 10); // 20
}

// 7 --- 匿名函数
{
    // 匿名函数是一个没有函数名的函数
    // 匿名函数在程序运行时动态声明，除了没有函数名，其他的与标准函数一样
    // 把匿名函数赋值给一个变量，这种表达式就成为了函数表达式
    // let res = function ([arguments]) {... }
    // 不带参数匿名函数
    {
        let msg = function () {
            return 'hello world';
        };
        console.log('[匿名函数]---不带参数 msg', msg()); // hello world
    }
    // 带参数匿名函数
    {
        let add = function (a: number, b: number) {
            return a + b;
        }
        console.log('[匿名函数]---带参数 add', add(1, 2)); // 3
    }
    // 匿名函数自调用
    {
        // 在匿名函数后使用 () 即可
        (function (msg) {
            console.log('[匿名函数自调用]---msg', msg)
        })('hi'); // hi
    }
}

// 8 --- 构造函数
{
    // TypeScript 支持使用 JavaScript 内置的构造函数 Function() 来定义函数
    // let res = new Function([arguments]);
    let myFunction = new Function('a', 'b', 'return a + b');
    console.log('[构造函数]---myFunction', myFunction(1, 2)); // 3
}

// 9 --- 递归函数
{
    // 递归函数即在函数内调用函数本身
    function factorial(num: number) {
        if (num <= 1) {
            return 1;
        } else {
            return (num * factorial(num - 1)); // 调用自身
        }
    }
    console.log('[递归函数]---factorial', factorial(6)); // 720
}

// 10 --- Lambda 函数
{
    // Lambda 函数也称之为箭头函数
    // ([param1, param2, ...paramn]) => statement
    let addTo10 = (x: number) => 10 + x;
    console.log('[Lambda 函数]---addTo10', addTo10(100)); // 110
    // ([param1, param2, ...paramn]) => {}
    addTo10 = (x: number) => {
        return 10 + x;
    }
    console.log('[Lambda 函数]---addTo10', addTo10(100)); // 110
    // 单个参数 () 是可选的
    let display = x => {
        console.log('[Lambda 函数]---单个参数', x);
    };
    display(1); // 1
    // 无参数可以设置空括号
    let disp = () => {
        console.log('[Lambda 函数]---无参数');
    }
    disp(); // 无参数
}

// 11 --- 函数重载
{
    // 重载是方法名相同，而参数不同，返回类型可以相同也可以不同
    // 每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表
    // 参数类型不同
    {
        // (str: string);
        // (num: number);
    }
    // 参数数量不同
    {
        // (num1: number)
        // (num1: number, num2: number)
    }
    // 参数类型顺序不同
    {
        // (num: number, str: string)
        // (str: string, num: number)
    }
    // 如果参数类型不同，则参数类型应设为 any
    // 参数数量不同，可以将不同的参数设置为可选
    function disp(s1: string): void;
    function disp(n1: number, s1: string): void;
    function disp(x: any, y?: any): void {
        console.log('[函数重载]---x', x);
        console.log('[函数重载]---y', y);
    }
    disp('abc');
    // abc
    // undefined
    disp(1, 'xyz');
    // 1
    // xyz
}