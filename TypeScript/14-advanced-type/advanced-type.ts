// 高级类型

// 1 --- 交叉类型
{
    // 交叉类型是将多个类型合并为一个类型
    // Person & ConsoleLogger ，这个类型的对象同时拥有了这 2 种类型的成员
    function extend<T, U>(frist: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in frist) {
            (result as any)[id] = (frist as any)[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (result as any)[id] = (second as any)[id];
            }
        }
        return result;
    }
    class Person {
        constructor(public name: string) { }
    }
    interface Loggable {
        log(param: string): void;
    }
    class ConsoleLogger implements Loggable {
        log(param: string) { console.log('[交叉类型]---param', param); }
    }
    let damon = extend(new Person('damon'), new ConsoleLogger());
    console.log('[交叉类型]---name', damon.name); // damon
    damon.log('hi'); // hi
}

// 2 --- 联合类型
{
    // 联合类型与交叉类型很有关联，但是使用上却完全不同
    // 联合类型表示一个值可以是几种类型之一
    // 联合类型可以通过管道 ( | ) 将变量设置多种类型，赋值时可以根据设置的类型来赋值
    // 注意：只能赋值指定的类型，如果赋值其它类型就会报错
    // 2.1 --- 语法
    {
        // Type1 | Type2 | Type3
        let value: string | number;
        value = 12;
        console.log('[语法]---数字', value); // 12
        value = 'aa';
        console.log('[语法]---字符串', value); // aa
    }
    // 2.2 --- 将联合类型作为函数参数使用
    {
        function display(name: string | string[]) {
            if (typeof name === 'string') {
                console.log('[函数参数]---', name);
            } else {
                for (let i = 0; i < name.length; i++) {
                    console.log('[函数参数]---', name[i]);
                }
            }
        }
        display('a'); // a
        display(['b', 'c']); // b c
    }
    // 2.3 --- 联合类型数组
    {
        // 也可以将数组声明为联合类型
        let arr: number[] | string[];
        arr = [1, 2];
        for (let i = 0; i < arr.length; i++) {
            console.log('[联合类型数组]---', arr[i]);
        }
        // 1
        // 2
        arr = ['a', 'b'];
        for (let i = 0; i < arr.length; i++) {
            console.log('[联合类型数组]---', arr[i]);
        }
        // a
        // b
    }
    // 2.4 --- 如果一个值是联合类型，只能访问此联合类型的所有类型里共有的成员
    {
        interface Bird {
            fly(): void;
            layEggs(): void;
        }
        interface Fish {
            swim(): void;
            layEggs(): void;
        }
        // layEggs
    }
}

// 3 --- 类型保护与区分类型
{
    interface Bird {
        fly(): void;
        layEggs(): void;
    }
    interface Fish {
        swim(): void;
        layEggs(): void;
    }
    let fish: Fish = {
        swim() { },
        layEggs() { }
    };
    let bird: Bird = {
        fly() { },
        layEggs() { }
    };
    function getSmallPet(): Fish | Bird {
        let pet: Fish | Bird;
        if (Math.random() > 0.5) {
            pet = fish;
        } else {
            pet = bird;
        }
        return pet;
    }
    // 区分类型
    {
        // 联合类型适合于那些值可以为不同类型的情况
        // JavaScript 里常用来区分 2 个可能值得方法是检查成员是否存在
        let pet = getSmallPet();
        if ((pet as Fish).swim) {
            (pet as Fish).swim();
        } else {
            (pet as Bird).fly();
        }
    }
    // 用户自定义的类型保护
    {
        // 类型保护：就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型
        // 定义一个类型保护：简单地定义一个函数，它的返回值是一个类型谓词
        {
            function isFish(pet: Fish | Bird): pet is Fish {
                return (pet as Fish).swim !== undefined;
            }
            // pet is fish 就是类型谓词
            // 谓词为 parameterName is Type 这种形式
            // parameterName 必须是来自当前函数签名里的一个参数名
            let pet = getSmallPet();
            if (isFish(pet)) {
                pet.swim();
            } else {
                pet.fly();
            }
            // 每当使用一些变量调用 isFish 时， TypeScript 会将变量缩减为那个具体的类型，只要这个类型与变量的原始类型是兼容的
        }
    }
    // typeof 类型保护
    {
        // 形式： typeof v === 'typeName' 和 typeof v !== 'typeName'
        // 'typeName' 必须是 'number', 'string', 'boolean', 'symbol'
        // 但是 TypeScript 并不会阻止与其他字符串比较，语言不会把那些表达式识别为类型保护
    }
    // instatnceof 类型保护
    {
        // v instanceof 构造函数
        // 此构造函数的 prototype 属性在不在 v 的原型链上
    }
}

// 4 --- 可以为 null 的类型
{
    // TypeScript 具有两种特殊的类型， null 和 undefined ，分别具有值 null 和 undefined
    // null 和 undefined 是所有其他类型的一个有效值
    // 可选参数和可选属性
    {
        function add(x: number, y?: number) {
            console.log('[可选参数]---y', y);
            return x + (y || 0);
        }
        add(1, 2); // 2
        add(1); // undefined
        add(1, undefined); // undefined
        add(1, null); // null
        class C {
            a: number;
            b?: number;
        }
        let c = new C();
        console.log('[可选属性]---', c.b); // undefined
    }
}

// 5 --- 类型别名
{
    // 类型别名会给一个类型起个新名字
    // 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组，以及其他任何需要手写的类型
    type Name = string;
    type NameResolver = () => string;
    type NameOrResolver = Name | NameResolver;
    function getName(n: NameOrResolver): Name {
        let name: Name;
        if (typeof n === 'string') {
            name = n;
        } else {
            name = n();
        }
        return name;
    }
    // 起别名不会新建一个类型，它创建了一个新名字来引用那个类型
    // 给原始类型起别名通常没什么用，尽管可以作为文档的一种形式使用
    // 同接口一样，类型别名也可以是泛型，可以添加类型参数并且在别名声明的右侧传入
    type Container<T> = { value: T };
    // 也可以使用类型别名在属性里引用自己
    type Tree<T> = {
        value: T;
        left: Tree<T>;
        right: Tree<T>;
    };
    // 类型别名不能出现在声明右侧的任何地方
    // type Yikes = Array<Yikes>; // error
    // 接口 vs 类型别名
    {
        // 接口创建了一个新的名字，可以在其它任何地方使用
        // 类型别名并不创建新名字
        type Alias = { num: number }; // 对象字面量类型
        interface Interface {
            num: number;
        } // Interface 类型
    }
    // 类型别名不能被 extends 和 implements （自己也不能 extends 和 implements 其他类型）
}

// 6 --- 索引类型
{
    // 使用索引类型，编译器就能够检查使用了动态属性名的代码
    function getProperty2<T, K extends keyof T>(o: T, name: K): T[K] {
        return o[name];
    }
    interface Person {
        name: string;
        age: number;
    }
    // keyof T ： 索引类型查询操作符
    // 对于任何类型 T ， keyof T 的结果为 T 上已知的公共属性名的联合
    let personProps: keyof Person; // 'name' | 'age'
    // T[K] ： 索引访问操作符
    let person: Person = {
        name: 'damon',
        age: 18
    };
    let name: Person['name'] = person['name'];
    let age: number = getProperty2(person, 'age');
    // 索引类型和字符串索引签名
    {
        // keyof 和 T<K> 与字符串索引签名进行交互
        // 如果有一个带有字符串索引签名的类型，那么 keyof T 会是 string ，并且 T[string] 为索引签名的类型
        interface Map<T> {
            [key: string]: T;
        }
        let keys: keyof Map<number>; // string | number
        let value: Map<number>['foo']; // number
    }
}

// 7 --- 映射类型
{
    // 映射类型： TypeScript 提供的从旧类型中创建新类型的一种方式
    type Keys = 'option1' | 'option2';
    type Flags = { [K in Keys]: boolean };
    // 类型变量 K ，它会依次绑定到每个属性
    // (属性列表)字符串字面量联合的 Keys ，它包含了要迭代的属性名的集合
    // boolean ，属性的结果类型
    // 等同于
    type Flags2 = {
        option1: boolean,
        option2: boolean
    };
}

// 8 --- 元组
{
    // 数组中元素的数据类型都是相同的
    // 如果存储的元素数据类型不同，则需要使用元组
    // 元组中允许存储不同类型的元素，元组 可以作为参数传递给函数
    // 8.1 --- 语法
    {
        // let tupleName = [value1, value2, ...number, valuen];
        let myTuple = [1, 'a'];
    }

    // 8.2 --- 访问元组
    {
        // 元组中元素使用索引来访问，以 0 开始
        let myTuple = [1, 'a'];
        console.log('[访问元组]---', myTuple[0]); // 1
    }

    // 8.3 --- 元组运算
    {
        // push()
        {
            // 向元组添加元素，添加在最后面
        }
        // pop()
        {
            // 从元组中移除最后一个元素，并返回移除的元素
        }
    }

    // 8.4 --- 解构元组
    {
        let a = [10, 'a'];
        let [num, str] = a;
        console.log('[解构元组]---num', num); // 10
        console.log('[解构元组]---str', str); // a
    }
}