// Number 对象
// Number 对象是原始数值的包装对象

// 1 --- 语法
{
    // var num = new Number(value);
    // 注意：一个参数值不能转换为一个数字将返回 NaN （非数字值）
}

// 2 --- Number 对象属性
{
    // 2.1 --- MAX_VALUE
    {
        // 可表示的最大数
        // 属性值接近于 1.79E+308
        // 大于该值的值代表 "infinity"
    }
    // 2.2 --- MIN_VALUE
    {
        // 可表示的最小数
        // 最接近 0 的正数（ 实际上不会变成 0 ）
        // 属性值约为 5e-324
        // 小于该值的值将会转换为 0
        // 最大的负数是 -MIN_VALUE
    }
    // 2.3 --- NAN
    {
        // 非数字值
    }
    // 2.4 --- NEGATIVE_INFINIT
    {
        // 负无穷大，溢出时返回该值
        // 该值小于 MIN_VALUE
    }
    // 2.5 --- POSITIVE_INFINITY
    {
        // 正无穷大，溢出时返回该值
        // 该值大于 MAX_VALUE
    }
    // 2.6 --- prototype
    {
        // Number 对象的静态属性
        // 允许向对象添加属性和方法
    }
    // 2.7 --- constructor
    {
        // 返回对创建此对象的 Number 函数的引用
    }
}

// 3 --- Number 对象方法
{
    // 3.1 --- toExponential()
    {
        // 将对象的值转换为指数计数法
        let num = 1225.30;
        console.log('[toExponential()]---', num.toExponential()); // 1.2253e+3
    }
    // 3.2 --- toFixed(digits = 0)
    {
        // 把数字转为字符串，并对小数点指定位数
        // 参数 digits 小数位数
        let num = 177.234;
        console.log('[toFixed()]---', num.toFixed()); // 177
        console.log('[toFixed()]---', num.toFixed(0)); // 177
        console.log('[toFixed()]---', num.toFixed(2)); // 177.23
        console.log('[toFixed()]---', num.toFixed(4)); // 177.2340
    }
    // 3.3 --- toLocaleString()
    {
        // 把数字转为字符串，使用本地数字格式顺序
        let num = new Number(177.1234);
        console.log('[toLocaleString()]---', num.toLocaleString()); // 177.1234
    }
    // 3.4 --- toPrecision()
    {
        // 把数字格式化为指定的长度
        let num = new Number(3.12);
        console.log('[toPrecision()]---', num.toPrecision()); // 3.12
        console.log('[toPrecision()]---', num.toPrecision(1)); //3 
        console.log('[toPrecision()]---', num.toPrecision(2)); // 3.1
        console.log('[toPrecision()]---', num.toPrecision(4)); // 3.120
    }
    // 3.5 --- toString()
    {
        // 把数字转换为字符串，使用指定的基数
        // 数字的基数是 2~36 之间的整数
        // 若省略参数，则使用基数 10
        let num = new Number(10);
        console.log('[toString()]---', num.toString()); // 10
    }
    // 3.6 --- valueOf()
    {
        // 返回一个 Number 对象的原始数字值
        let num = new Number(10);
        console.log('[valueOf()]---', num.valueOf()); // 10
    }
}