// 元组
// 数组中元素的数据类型都是相同的
// 如果存储的元素数据类型不同，则需要使用元组
// 元组中允许存储不同类型的元素，元组 可以作为参数传递给函数

// 1 --- 语法
{
    // let tupleName = [value1, value2, ...number, valuen];
    let myTuple = [1, 'a'];
}

// 2 --- 访问元组
{
    // 元组中元素使用索引来访问，以 0 开始
    let myTuple = [1, 'a'];
    console.log('[访问元组]---', myTuple[0]); // 1
}

// 3 --- 元组运算
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

// 4 --- 解构元组
{
    let a = [10, 'a'];
    let [num, str] = a;
    console.log('[解构元组]---num', num); // 10
    console.log('[解构元组]---str', str); // a
}