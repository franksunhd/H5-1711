var a = 10;
console.log(a.toString(2)); //1010

/*
功能：数组去重
@arr, 需要去重的数组
返回: 去重之后的数组
*/

function uniqueArr(arr){
  var temp = [];
  // 提高效率
  for (var i = 0, len = arr.length; i < len ; i++) {
    // 如果temp数组中没有,将数值入栈
    if (temp.indexOf(arr[i]) == -1){
      temp.push(arr[i]);
    }
  }
  // 返回数组
  return temp;
}

var result = uniqueArr([1,1,1,1,2,2,2,3,3,3,2,3,1]);
console.log(result);
