// 类型推论

// 1 --- 基础
{
    // TypeScript 里，在有些没有明确指出类型的地方，类型推论会帮助提供类型
    let x = 3;
    // 变量 x 的类型被推断为数字
    // 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时
}

// 2 --- 最佳通用类型
{
    // 当需要从几个表达式中推断类型时，会使用这些表达式的类型来推断出一个最合适的通用类型
    let x = [0, 1, null];
    // 为了推断 x 的类型，必须考虑所有元素的类型；上述两种选择： number 和 null
    // 计算通用类型算法会考虑所有的候选类型，并给出了一个兼容所有候选类型的类型
    // 由于最终的通用类型取自候选类型，有时候候选类型共享相同的通用类型，但是没有一个类型能作为所有候选类型的类型
    class Animal { }
    class Cat extends Animal { }
    class Dog extends Animal { }
    let zoo = [new Cat(), new Dog()];
    // 当没有找到最佳通用类型时，类型推断的结果为联合数组类型
    // zoo 的类型为 (Cat | Dog)[]
    // 当候选类型不能使用的时候，需要明确指出类型
    let betterZoo: Animal[] = [new Cat(), new Dog()];
    // betterZoo 的类型为 Animal[]
}

// 3 --- 上下文类型
{
    // 使用情况：函数的参数，赋值表达式的右边，类型断言，对象成员、数组字面量，返回值语句
    // 上下文类型也会作为最佳通用类型的候选类型
    class Animal { }
    class Cat extends Animal { }
    class Dog extends Animal { }
    function createZoo(): Animal {
        return [new Cat(), new Dog()];
    }
    // 这个例子的最佳通用类型的 3 个候选者：Animal, Cat, Dog
    // Animal 会被作为最佳通用类型
}