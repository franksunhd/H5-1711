var num = 0;
label_one:for(var i = 0; i < 10; i++){
  for(var j = 0; j < 10;j++){
    if (i == 5 && j == 5) {
      break label_one;
    }
    // console.log(i,j);
    num++;
  }
}
console.log(num);

function fun(arg1,arg2,arg3){
  console.log(fun.length);
  console.log(arguments.length);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
fun(1,2,3,4);

// 函数返回值
function fun1(arg1,arg2){
  return arg1 + arg2;
  console.log("after return...");
}

fun1();

function fun2(arg1,arg2){
  console.log("before return...");
  return arg1 + arg2;
}

fun2();

function add(a,b){
  for (var k = 0; k < arguments.length; k++) {
    console.log(arguments[k]);
    console.log(a,b);
  }
  return a + b;
}

sm1 = add(1,2,3,4,5,6,7,8,9);
console.log("add函数的返回值为:" + sm1);
















//
