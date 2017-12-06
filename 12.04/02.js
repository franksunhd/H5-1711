// 使用 label 语句可以在代码中添加标签,以便将来使用

// labelone: for (var i = 0; i < 10; i++) {
//   if (i == 5) {
//     break labelone;
//   }
//   console.log(i);
// }

// with 语句的作用是将代码的作用域设置到一个特定的对象中,建议少用。
// 这里不可用,只适合在html文件
// with(location){
//   console.log(search.substring(1));  //location.search.substring(1)
//   console.log(hostname);             //location.hostname
// }

// switch case
// 
for(var j = 0; j < 5; j++){
  sum = Math.floor(Math.random()*4);
  switch (sum) {
    case 0:
      console.log("0");
      break;
    case 1:
      console.log("1");
      break;
    case 2:
      console.log("2");
      break;
    case 3:
      console.log("3");
      break;
    default:
      console.log("default");
      break;
  }
}
