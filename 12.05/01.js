// ECMA 5 数组新方法

// forEach 遍历数组
var a = [1,2,3,4,5],sum = 0;
a.forEach(function(e,i,a) {
  sum += e;
});
console.log(sum);

// map 为每个元素执行一次函数
var result = a.map(function(e){
  return e + 1;
});
console.log(result);

// filter 过滤器
var item = a.filter(function(e,i,a){
  if (e % 2 == 0) {
    return true;
  }
});
console.log(item);

// every 只有所有元素都通过函数才返回 true
var ery = a.every(function(e,i,a){
  return e >= 1;
});
console.log(ery);

// some 只要有一个通过函数就返回 true
var som = a.some(function(e,i,a){
  return e >= 4;
});
console.log(som);

// reduce
var he = a.reduce(function(pre,cur,i,a){
  return pre + cur;
},0);
console.log(he);

var mul = a.reduce(function(pre,cur,i,a){
  return pre * cur;
},1);
console.log(mul);

// indexOf

console.log(a.indexOf(2));
console.log(a.indexOf(19));











//
