// Number
console.log("-----Number------");
console.log(Number(true));    //1
console.log(Number("true")); //NaN
console.log(Number("NaN")); //NaN
console.log(Number("hello world")); //NaN
console.log(Number("123"));     //123
console.log(Number("123.05")); //123.05
console.log(Number("00022")); //22


// parseInt
console.log("-----parseInt------");
console.log(parseInt(""));      // NaN
console.log(parseInt("12.02")); //12
console.log(parseInt("0x12"));  //18
console.log(parseInt("070"));   //70
console.log(parseInt("1234abc")); //1234
console.log(parseInt("abc1234"));  //NaN


console.log(parseInt("010",8)); //8
console.log(parseInt("10",2));//2
console.log(parseInt("20",2));//NaN


// parseFloat
console.log("-----parseFloat-----");
console.log(parseFloat(""));//NaN
console.log(parseFloat("122.02")); //122.02
console.log(parseFloat("0x1010.10")); //0
console.log(parseFloat("12.12.12")); //12.12
console.log(parseFloat("abc123")); //NaN
console.log(parseFloat("12.acd")); //12
console.log(parseFloat(".12")); //0.12
console.log(parseFloat(".acd"));  // NaN











//
