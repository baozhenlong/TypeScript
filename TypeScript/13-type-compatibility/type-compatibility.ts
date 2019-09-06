// 类型兼容性

// 1 --- 介绍
{
    // TypeScript 里的类型兼容性是基于结构子类型的
    // 结构类型是一种使用其成员来描述类型的方式
    // TypesScript 结构化类型的系统的基本规则
    {
        // 如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性
        interface Named {
            name: string;
        }
        let x: Named;
        let y = { name: 'damon', age: 18 };
        x = y;
        // 这里要检查 y 是否能赋值给 x ，编译器检查 x 中的每个属性，看是否在 y 中也找到对应的属性
        // 检查函数参数时，使用相同的规则
        function greet(n: Named) {
            console.log('[结构化类型]---hello', n.name);
        }
        greet(y); // damon
        // 注意， y 有个额外的 location 属性，但这不会引发错误
        // 只有目标类型（ 这里是 Named ）的成员会被一一检查
        // 这个比较过程是递归进行的，检查每个成员及子成员
    }
}

// 2 --- 比较两个函数
{
    // 处理参数列表
    {
        let x = (a: number) => 0;
        let y = (b: number, s: string) => 0;
        y = x;
        // x = y; // Error
        // 右边函数的每个参数必须在左边函数里找到对应类型的参数；注意，参数的名字相同与否无所谓，只看它们的类型
        // 允许忽略额外的参数
    }
    // 处理返回值类型
    {
        let x = () => ({ name: 'damon' });
        let y = () => ({ name: 'damon', age: 18 });
        x = y;
        // y = x; // Error
        // 类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型
    }
    // 可选参数和剩余参数
    {
        // 比较函数兼容性的时候，可选参数与必须参数是可互换的
        // 源类型上有额外的可选参数不是错误，目标类型的可选参数在源类型里没有对应的参数也不是错误
        function invokeLater(args: any[], callback: (...args: any[]) => void) { }
        invokeLater([1, 2], (x, y) => console.log(x, y));
        invokeLater([1, 2], (x?, y?) => console.log(x, y));
    }

}

// 3 --- 枚举
{
    // 枚举类型与数字类型兼容，并且数字类型与枚举类型兼容
    // 不同枚举类型之间是不兼容的
    enum Status { Ready, Wating }
    enum Color { Red, Blue }
    let status = Status.Ready;
    // status = Color.Red; // Error
}

// 4 --- 类
{
    // 类与对象字面量和接口差不多，但有一点不同：类有静态部分和实例部分的类型
    // 比较两个类类型的对象时，只有实例的成员会被比较，静态成员和构造函数不在比较的范围内
    {
        class Animal {
            feet: number;
            constructor(name: string, numFeet: number) { }
        }
        class Size {
            feet: number;
            constructor(numFeet: number) { }
        }
        let a: Animal;
        let s: Size;
        a = s;
        s = a;
    }
    // 类的私有成员和受保护成员
    {
        // 类的私有成员和受保护成员会影响兼容性
        // 当检查类实例的兼容时，如果目标类型包含一个私有成员，那么源类型必须包含来自同一个类的这个私有成员
        // 同样地，这条规则也适用于包含受保护成员实例的类型检查
        // 这允许子类赋值给父类，但是不能赋值给其他同样类型的类
    }
}

// 5 --- 泛型
{
    // 因为 TypeScript 是结构性的类型系统，类型参数只影响使用其作为类型一部分的结果类型
    interface NotEmpty<T> {
        data: T;
    }
    let x: NotEmpty<number>;
    let y: NotEmpty<string>;
    // x = y; // Error
    // 在没有指定泛型类型的泛型参数时，会把所有泛型参数当成 any 比较，然后用结果类型进行比较
    interface Empty<T> { }
    let a: Empty<number>;
    let b: Empty<string>;
    a = b;
    let identity = function <T>(x: T): T { return x; };
    let reverse = function <U>(x: U): U { return x; };
    identity = reverse;
}