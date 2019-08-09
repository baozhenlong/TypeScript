// Array
// 数组对象是使用单独的变量名来存储一系列的值

// 1 --- 数组
{
    // 1.1 --- 语法
    {
        // var arrayName[: type]; // 声明
        // arrayName = [value1, value2, ..., valuen]; // 初始化

        // var arrayName[: type] = [value1, value2, ..., valuen];

        // 如果数组声明时未设置类型，则会被认为是 any 类型
        // 在初始化时，根据第一个元素的类型来推断数组的类型
    }

    // 1.2 --- 实例
    {
        let strs: string[];
        strs = ['a', 'b', 'c'];
        console.log('[数组]---', strs[0]); // a
        let nums: number[] = [1, 2, 3];
        console.log('[数组]---', nums[0]); // 1
    }
}

// 2 --- 数组对象
{
    // 可以使用 Array 对象创建数组
    // Array 对象的构造函数接受以下两种值
    {
        // 表示数组大小的数值
        // 初始化的数组列表，元素使用逗号分隔值
    }
    // 实例
    {
        let nums: number[] = new Array(2);
        console.log('[数组对象]---', nums); // [ <2 empty items> ]
        let strs: string[] = new Array('a', 'b', 'c');
        console.log('[数组对象]---', strs); // [ 'a', 'b', 'c' ]
    }
}

// 3 --- 数组解构
{
    let nums: number[] = [1, 2, 3];
    let [x, y] = nums;
    console.log('[数组解构]---x', x); // 1
    console.log('[数组解构]---y', y); // 2
}

// 4 --- 数组迭代
{
    // 使用 for 语句来循环输出数组的各个元素
    let index: any;
    let nums: number[] = [1, 2, 3];
    for (index in nums) {
        console.log('[数组迭代]---', typeof index); // string
        console.log('[数组迭代]---', nums[index]); // 1 2 3
    }
}

// 5 --- 多维数组
{
    // 一个数组的元素可以是另外一个数组，这样就构成了多维数组
    // 二维数组
    let nums: number[][] = [
        [1, 2, 3],
        [11, 22, 33]
    ];
    console.log('[二维数组]---', nums); // [ [ 1, 2, 3 ], [ 11, 22, 33 ] ]
}

// 6 --- 数组在函数中使用
{
    // 6.1 --- 作为参数传递给函数
    {
        let nums: number[] = new Array(1, 2, 3);
        function sum(nums: number[]) {
            let sum: number = 0;
            for (let i: number = 0; i < nums.length; i++) {
                sum += nums[i];
            }
            return sum;
        }
        console.log('[数组作为参数传递给函数]---', sum(nums)); // 6
    }
    // 6.2 --- 作为函数的返回值
    {
        function getNums(): number[] {
            return new Array(1, 2, 3);
        }
        console.log('[数组作为函数的返回值]---', getNums()); // [ 1, 2, 3 ]
    }
}

// 7 --- 数组方法
{
    // 7.1 --- concat()
    {
        // 连接两个或多个的数组，并返回结果
        let strs: any[] = ['a', 'b', 'c'];
        let nums: number[] = [1, 2, 3];
        console.log('[concat()]---', strs.concat(nums));
        // [ 'a', 'b', 'c', 1, 2, 3 ]
    }
    // 7.2 --- every()
    {
        // 检测数组的每个元素是否都符合条件
    }
    // 7.3 --- filter()
    {
        // 检测数组的每个元素，并返回符合条件的所有元素的数组
    }
    // 7.4 --- forEach()
    {
        // 数组的每个元素都执行一次回调函数
    }
    // 7.5 --- indexOf()
    {
        // 搜索数组中的元素，并返回它所在的位置
    }
    // 7.6 --- join()
    {
        // 把数组的所有元素放入一个字符串
    }
    // 7.7 --- lastIndexOf()
    {
        // 从后往前搜索数组中的元素，并返回它所在的位置
    }
    // 7.8 --- map()
    {
        // 通过指定函数处理数组的每个元素，并返回处理后的数组
    }
    // 7.9 --- pop()
    {
        // 删除数组的最后一个元素，并返回处理后的数组
    }
    // 7.10 --- push() 
    {
        // 向数组的末尾添加一个或多个元素，并返回新的长度
    }
    // 7.11 reduce()
    {
        // 将数组元素计算为一个值（从左到右）
    }
    // 7.12 reduceRight()
    {
        // 将数组元素计算为一个值（从右到左）
    }
    // 7.13 --- reverse()
    {
        // 反转数组的元素顺序
    }
    // 7.14 --- shift()
    {
        // 删除并返回数组的第一个元素
    }
    // 7.15 --- slice()
    {
        // 选取数组的一部分，并返回一个新数组
    }
    // 7.16 --- some()
    {
        // 检测数组元素中是否有元素符合指定条件
    }
    // 7.17 --- sort()
    {
        // 对数组的元素进行排序
    }
    // 7.18 --- splice()
    {
        // 从数组中添加或删除元素
    }
    // 7.19 --- toString()
    {
        // 把数组转换为字符串，并返回结果
    }
    // 7.20 --- unshift()
    {
        // 向数组的开头添加一个或多个元素，并返回新的长度
    }
} 