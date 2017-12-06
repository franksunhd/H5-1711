
// join 和 split的区别
var a = ['html','css','java','javascript'];
console.log(a.join("#"));
console.log(typeof(a.join())); // string
console.log(typeof(a));         // object
var b = "html#css#java#javascript";
console.log(b.split("#"));
console.log(typeof b);        //  string
console.log(typeof(b.split()));   // object
