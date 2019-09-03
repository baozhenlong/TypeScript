// 枚举
// 使用枚举可以定义一些带名字的常量
// TypeScript 支持数字和和基于字符串的枚举

// 1 --- 数字枚举
{
    enum DirectionNumber {
        Up = 1,
        Down, // 2
        Left, // 3
        Right // 4
    }
    // 不使用初始化器
    enum DirectionNum {
        Up, // 0
        Down, // 1
        Left, // 2
        Right // 3
    }
    // 通过枚举的名字来访问枚举类型
    // 通过枚举的属性来访问枚举成员
    function printDirection(direction: DirectionNumber) {
        console.log('[数字枚举]---使用枚举', direction);
    }
    printDirection(DirectionNumber.Down); // 2
    // 数字枚举可以被混入到计算和常量成员
    {
        // 即不带初始化器的枚举
        // 或者被放在第一的位置
        // 或者被放在使用了数字常量或其他常量初始化了的枚举后面
        // 下面的情况不被允许
        // enum E {
        //     A = getsomeValue(),
        //     B
        // }
    }
}

// 2 --- 字符串枚举
{
    // 在一个字符串枚举里，每个成员都必须用字符串字面量，或另一个字符串枚举成员进行初始化
    enum DirectionString {
        Up = 'UP',
        Down = 'DOWN',
        Left = 'LEFT',
        Right = 'Right'
    }
}

// 3 --- 计算和常量成员
{
    // 每一个枚举成员都带有一个值，它可以是常量或计算出来的
    // 当满足如下条件时，枚举成员被当作是常量
    {
        // 它是枚举的第一个成员，且没有初始化器，这种情况下它被赋予值 0
        {
            enum E { X }
        }
        // 它不带有初始化器，且它之前的枚举成员是一个数字常量；这种情况下，当前枚举成员的值为它上一个枚举成员的值加 1
        {
            enum E1 { X, Y, Z }
            enum E2 { A = 1, B, C }
        }
        // 枚举成员使用常量枚举表达式初始化
        // 常量枚举表达式是 TypeScript 表达式的子集，它可以在编译阶段求值
        // 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式
        {
            // 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
            // 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义）
            // 带括号的常量枚举表达式
            // 一元运算符 +, -, ~ 其中之一应用在了常量枚举表达式
            // 常量枚举表达式作为二元运算符 +, - ,*, /, %, <<, >>, >>>, &, |, ^ 的操作对象
        }
    }
    // 所有其他情况的枚举成员被当作是需要计算得出的值
    {
        enum FileAccess {
            None,
            Read = 1 << 1,
            Write = 1 << 2,
            ReadWrite = Read | Write,
            G = '123'.length
        }
    }
}

// 4 --- 联合枚举与枚举成员的类型
{
    // 存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员
    // 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为
    {
        // 任何字符串字面量：例如， 'foo', 'bar'
        // 任何数字字面量：例如， 1, 100
        // 应用了一元 - 符号的数字字面量：例如， -1, -100
    }
    // 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义
    {
        // 枚举成员成为了类型
        {
            enum ShapeKind {
                Circle,
                Square
            }
            interface Circle {
                kind: ShapeKind.Circle
            }
            interface Suqrue {
                kind: ShapeKind.Square
            }
            let c: Circle = {
                kind: ShapeKind.Circle
            };
            // let d: Circle = {
            //     kind: ShapeKind.Square
            // }; // error
        }
        // 枚举类型本身变成了每个枚举成员的联合
        {
            // 类型系统能够联合枚举知道枚举里的值的集合
            enum EE {
                Foo,
                Bar,
                Fb
            }
            function ff(x: EE) {
                // if (x !== EE.Foo || x !== EE.Bar) { }
                // error：当 x 不是 EE.Foo 时，没理由再去检查它是否为 EE.Bar
            }
        }
    }
}

// 5 --- 反向映射
{
    // 除了创建一个以属性名作为对象成员的对象之外，数字枚举成员还具有了反向映射，从枚举值到枚举名
    enum Enum {
        A
    }
    let a = Enum.A;
    console.log('[反向映射]---', Enum[a]); // A
    // 注意：不会为字符串枚举成员生成反向映射
}

// 6 --- const 枚举
{
    // 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，可以使用 const 枚举
    // 常量枚举通常在枚举上使用 const 修饰符来定义
    const enum CEnum {
        A = 1,
        B = A * 2
    }
    // 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除
    // 常量枚举成员在使用的地方会被内联进来；之所以可以这么做是因为，常量枚举不允许包含计算成员
}