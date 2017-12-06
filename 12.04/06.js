var a = [2,3,4,5,6];
var b = a.slice(0,2);
var c = a.slice();
var d = a.slice(2);
var e = a.slice(-2);

var a1 = [d,7,8,9]; // [ [4,5,6] ,7,8,9]
var a2 = a1.slice(1);
// console.log(a2);

// splice 对数组元素进行 替换 修改
var names = ['name1','name2','name3','name4'];
var remove1 = names.splice(2,0,"name3.0");
// console.log(names);

var date = new Date();

// console.log(date);
// console.log(date.toLocaleString());

// sort 是对字母排列顺序进行排列
var a3 = [8,5,6,3,7,2,4];
// console.log(a3.sort());
a3.sort(function(a,b){
  console.log("a = %d,b = %d",a,b);
  return a - b;
});

console.log(a3);












//
