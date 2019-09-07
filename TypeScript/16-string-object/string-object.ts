// String 对象
// String 对象用于处理文本（字符串）

// 1 --- 语法
{
    let txt = new String('string');
    // 或者更简单方式
    txt = 'string';
}

// 2 --- String 对象属性
{
    // 2.1 --- constructor
    {
        // 对创建该对象的函数的引用
        let str = new String('This is string');
        console.log('[constructor]---', str.constructor);
        // function String() { [native code] }
    }
    // 2.2 --- length
    {
        // 返回字符串的长度
        let str = new String('hi !');
        console.log('[length]---', str.length); // 4
    }
    // 2.3 --- prototype
    {
        // 允许向对象添加属性和方法
    }
}

// 3 --- String 方法
{
    // 3.1 --- charAt()
    {
        // 返回在指定位置的字符
        let str = new String('hi');
        console.log('[charAt()]---', str.charAt(0)); // h
        console.log('[charAt()]---', str.charAt(2) === ''); // true
    }
    // 3.2 --- charCodeAt()
    {
        // 返回在指定位置的字符的 Unicode 编码
        let str = new String('hi');
        console.log('[charCodeAt()]---', str.charCodeAt(0)); // 104
    }
    // 3.3 --- concat()
    {
        // 连接两个或多个字符串，并返回新的字符串
        // FIXME 使用 String 编辑时报错
        // 使用 string
        let str1: string = 'hi';
        let str2: string = 'hello';
        console.log('[concat()]---', str1.concat(str2)); // hihello
    }
    // 3.4 --- indexOf()
    {
        // 返回某个指定的字符串值在字符串中首次出现的位置
        let str = new String('hello world');
        console.log('[indexOf()]---', str.indexOf('ll')); // 2
    }
    // 3.5 --- lastIndexOf()
    {
        // 从后向前搜索字符串，并从起始位置 0 开始计算返回字符串最后出现的位置
        let str = new String('one two one');
        console.log('[lastIndexOf()]---', str.lastIndexOf('one')); // 8
    }
    // 3.6 --- localeCompare()
    {
        // 用本地特定的顺序来比较两个字符串
        // FIXME 使用 String 编辑时报错
        // 使用 string
        let str1 = 'this is abc';
        let str2 = 'this is b';
        console.log('[localeCompare()]---', str1.localeCompare(str2)); // -1
    }
    // 3.7 --- match()
    {
        // 查找一个或多个正则表达式的匹配
    }
    // 3.8 --- replace()
    {
        // 替换与正则表达式匹配的子串
    }
    // 3.9 --- search()
    {
        // 检索与正则表达式相匹配的值
    }
    // 3.10 --- slice()
    {
        // 提取字符串的片段，并在新的字符串中返回被提取的部分
    }
    // 3.11 --- split()
    {
        // 把字符串分割为字符串数组
    }
    // 3.12 --- substr()
    {
        // 从起始索引提取字符串中指定数目的字符
    }
    // 3.13 --- substring()
    {
        // 提取字符串中两个指定索引号之间的字符
    }
    // 3.14 --- toLocaleLowerCase()
    {
        // 根据主机的语言环境把字符串转换为小写
    }
    // 3.15 --- toLocaleUpperCase()
    {
        // 根据主机的语言环境把字符串转换为大写
    }
    // 3.16 --- toLowerCase()
    {
        // 把字符串转换为小写
    }
    // 3.17 --- toUpperCase()
    {
        // 把字符串转换为大写
    }
    // 3.18 --- toString()
    {
        // 返回字符串
    }
    // 3.19 --- valueOf()
    {
        // 返回指定字符串对象的原始值
    }
}