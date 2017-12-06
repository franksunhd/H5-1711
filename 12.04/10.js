
function bToO(num){
  var temp, arr = [];
  while (true){
    temp = num % 2;
    // console.log(temp);
    arr.push(temp);
    num = parseInt(num / 2);
    // console.log(num);
    if (num == 0){
      break;
    }
  }

  var s = arr.reverse().join('');
  console.log(s);
  return s;
}

bToO(10);
