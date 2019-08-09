// 联合类型
// 联合类型可以通过管道 ( | ) 将变量设置多种类型，赋值时可以根据设置的类型来赋值
// 注意：只能赋值指定的类型，如果赋值其它类型就会报错

// 1 --- 语法
{
    // Type1 | Type2 | Type3
    let value: string | number;
    value = 12;
    console.log('[语法]---数字', value); // 12
    value = 'aa';
    console.log('[语法]---字符串', value); // aa
}

// 2 --- 将联合类型作为函数参数使用
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

// 3 --- 联合类型数组
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