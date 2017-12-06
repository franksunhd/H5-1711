# 闭包

1. 闭包是什么?
是指有权访问另一函数作用域中变量的函数.子函数可以访问父函数中的变量.
返回值是一个函数.

2. 闭包的优缺点?
## 优点
  减少全局变量的定义,有利于变量的私有化.注意:JS 目前没有私有变量.
## 缺点
  运行环境 会一直存在,变量常驻内存,增加内存损耗,不容易被释放.

3. 闭包
  闭包就是 函数内嵌套函数
  闭包函数在外面被调用,访问
  闭包可以访问函数外变量,函数外变量不可以访问闭包内部.

4. 如何创建闭包?
  在函数内部定义一个内部函数,内部函数引用了当前作用域的变量,并且将内部函数返回,
  内部函数就是闭包.

5. 应用场景

6. this
   this 指向的 永远只可能是对象
   this 指向谁 永远不取决于this在哪,而是取决于函数在哪调用
   this 指向的对象 我们称之为函数的上下文context 也叫函数的调用

# 面向对象
  对象:属性和方法的集合
  类:变量和方法的集合

  封装:将过程和数据包围起来,对数据的访问通过已定义的接口
  继承:子类 继承 父类 的属性和方法
  多态:对两个或多个属于不同类的对象,对同一方法的调用作出不同响应的方式.
  JS没有函数重载,C没有继承和多态

# 函数和方法的区别:
  函数:它是独立运行的功能模块.
  方法:是绑定在对象上的.

# 四种作用域
   L       >     E       >       G       >       B
(local)     (enclosing)       (global)       (build in)
 局部           闭包              全局            内置

# 创建对象的常见方式
1. 使用已有类型创建
var obj = new Object();
var date = new Date();

2. 直接使用字面量的方法创建
var obj = {
  name:'ssy',
  age:23,
  sayName:function(){
    console.log('this.name');
  }
}

3. 工厂模式

function CreatePerson(name,age){
  var x = new Object();
  x.name = name;
  x.age = age;
  x.sayName = function(){
    console.log('this.name');
  }
  return x;
}

var str = CreatePerson('ssy',12);
str.sayName();

4. 构造函数

function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayName=function(){
        console.log(this.name);
    }
}
var person1=new Person('amy',23);
var person2=new Person('amy',24);

5. 原型模式

function Person(){
}
Person.prototype.name = "lisi";
Person.prototype.age = 12;

var one = new Person();

6. 原型模式和构造函数结合

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype={
  <!-- costructor 构造函数 -->
    costructor:Person,
    sayName:function(){
        console.log(this.name);
    }
}
