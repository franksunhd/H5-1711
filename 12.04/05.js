//
// var a = new Array();
// a.length = 10;
// console.log(a);

var b = [1,2,3,4,5,6];
// current  当前项数值
// index    索引
// err      整个数组
b.forEach(function(current,index,err){
  // console.log("current = ",current);
  console.log("index = ",index);
  // console.log("err = ",err);
});

for(var i in b){
  console.log(b[i]);
}
