# 函数绑定

1. 函数绑定就是创建一个函数，可以在特定的this环境中指定参数调用另一个参数.

2. 函数一旦bind成功，那么从此以后返回的新函数的this就已经固定了
在任何位置调用该函数，this都不会变

3. 其中的参数, arg1 和 arg2 相当于提前给fun1传递了参数
在调用fun1时传入的参数会紧跟其后，作为额外的参数.

4. bind功能: 一个函数可以bind任意次数，想bind到哪个this都行
    1). 绑定this
    2). 提前传入参数

# 函数柯里化 提前给该函数传入固定的参数

# 函数缓存 数组存储查询原理

# 高阶函数  函数的加工厂

# 定时器节流 也叫作函数节流
- 基本思想: 函数不可能在没有间隔的情况下连续执行,即使setTimeout的间隔设置为0,函数的执行也会有微小的间隔.
- 那么,函数在第一次调用的时候,会创建一个定时器,在指定的时间间隔之后执行代码,第二次调用的时候会先清除上一次的定时器,重新创建新的定时器.
- 这样做可以避免在代码重复执行N多次的时候,程序卡死.
