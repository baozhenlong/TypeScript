// 泛型

// 1 --- 例子
{
    // identity 函数：返回任何传入它的值
    function identity1(arg: number): number {
        return arg;
    }
    function identity2(arg: any): any {
        return arg;
    }
    // 使用 any 类型会导致这个函数可以接收任何类型的 arg 参数
    // 这样就丢失了一些信息：传入的类型与返回的类型应该是相同的
    // 使用类型变量，它是一种特殊的变量，只用于表示类型而不是值
    function identity<T>(arg: T): T {
        return arg;
    }
    // identity 函数叫做泛型函数
    // 泛型函数可以用两种方法使用
    {
        // 传入所有的参数，包括类型参数
        {
            let output = identity<string>('myString');
            // 这里明确指定 T 是 string 类型，并作为一个参数传给函数，使用 <> 括起来，而不是 ()

        }
        // 更普遍：利用类型推论（即编译器会根据传入的参数自动地确定 T 的类型）
        {
            let output = identity('myString');
            // 注意没必要使用尖括号( <> )明确地传入类型
            // 编译器可以查看 myString 的值，然后把 T 设置为它的类型
        }
    }
}

// 2 --- 使用泛型变量
{
    // 使用泛型创建像 identity 这样的泛型函数时，编译器要求在函数体必须正确使用这个通用的类型
    // 即必须把这些参数当作是任意或所有类型
    function loggingIdentity<T>(arg: T): T {
        if (arg instanceof Array) {
            console.log('[使用泛型变量]---length', arg.length);
        }
        return arg;
    }
    loggingIdentity(1);
    loggingIdentity([1]); // 1
}

// 3 --- 泛型类型
{
    // 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样
    let myIdentity: <T>(arg: T) => T = identity;
    // 也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以
    let myIdentity2: <U>(arg: U) => U = identity;
    // 还可以使用带有调用签名的对象字面量来定义泛型函数
    let myIdentity3: { <T>(arg: T): T } = identity;
    // 泛型接口
    interface GenericIdentity {
        <T>(arg: T): T;
    }
    let myIdentity4: GenericIdentity = identity;
    // 可以把泛型参数当作整个接口的一个参数；这样可以知道使用的具体是哪个泛型类型了
    interface GenericIdentityFn<T> {
        <T>(arg: T): T;
    }
    let myIdentity5: GenericIdentityFn<number> = identity;
}

// 4 --- 泛型类
{
    // 泛型类看上去和泛型接口差不多
    // 泛型类使用 <> 括起泛型类型，跟在类名后面
    class GenericData<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }
    let myData = new GenericData<number>();
    myData.zeroValue = 0;
    myData.add = function (x, y) {
        return x + y;
    };
    let myData2 = new GenericData<string>();
    myData2.zeroValue = '';
    myData2.add = function (x, y) {
        return x + y;
    };
    // 类有两部分：静态部分和实例部分
    // 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型
}

// 泛型约束
{
    // 定义一个接口来描述约束条件，使用这个接口和 extends 关键字来实现约束
    interface Lengthwise {
        length: number;
    }
    function constrainedIdentity<T extends Lengthwise>(arg: T): T {
        console.log('[类型约束]---', arg.length);
        return arg;
    }
    // 这个泛型函数被定义了约束，因此它不再是适用于任意类型
    // constrainedIdentity(3); // error, number does'not have a .length property
    // 需要传入复合约束类型的值，必须包含必须的属性
    constrainedIdentity({ length: 10, value: 1 }); // 10
    // 在泛型约束中使用类型参数
    {
        // 可以声明一个类型参数，且它被另一个类型参数所约束
        function getProperty<T, K extends keyof T>(obj: T, key: K) {
            return obj[key];
        }
        let x = { a: 1, b: 2, c: 3, d: 4 };
        getProperty(x, 'a');
        // getProperty(x, 'm'); // error,: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'
    }
    // 在泛型里使用类类型
    {
        // 在 TypeScript 使用泛型创建工厂函数时，需要引用构造函数的类类型
        function create<T>(c: { new(): T; }): T {
            return new c();
        }
    }
}