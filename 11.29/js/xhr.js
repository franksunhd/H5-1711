// 为了兼容低版本的IE浏览器 对于现代浏览器可以省略部分代码

function createXHR() {
  // 如果是现代的标准浏览器
  if (typeof XMLHttpRequest != "undefined") {
    return new XHLHttpRequest();
  } else if (typeof ActiveXobject != "undefined") {
    if (typeof arguments.callee.activeXString != "string"){
      var versions = ["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],i,len;
      for (i=0,len=versions.length; i < len; i++){
        try {
          new ActiveXobject(versions[i]);
          arguments.callee.activeXobject = versions[i];
          break;
        } catch (err) {
        // 跳过
        }
      }
    }
    return new ActiveXobject(arguments.callee.activeXString);
  }
  else {
    throw new Error("No XHR object available.");
  }
}

var xhr = createXHR();
