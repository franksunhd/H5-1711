// map 函数
var a = [1,2,3,4,5,6,7,8];
var result = a.map(function(current,index,arr){
  //map需要每次返回，由返回的数据共同组成一个新数组
   return current + 10;
});
console.log(typeof(result)); // object
console.log(result);  // [ 11,12,13,14,15,16,17,18 ]


// filter 测试数组的每个元素的函数 保留返回 true
var result1 = a.filter(function(e,i,a){
    if (e % 2 == 0) {
        return true;
    }
});
console.log(result1);

// every
var ret = a.every(function(e,i,a){
     return i > 3;
  });
console.log(ret);//false

// some
var rets = a.some(function(e,i,a){
     return i > 3;
  });
console.log(rets);//true

// indexOf
console.log(a.indexOf(2)); //  下标位置 1
console.log(a.indexOf(2,3)); //  查找 2 从 下表位置为3开始
console.log(a.indexOf(19)); // -1 代表没有


















//
