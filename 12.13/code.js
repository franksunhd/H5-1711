/*
封装函数.实现水平匀速运动
function move(elem,step,interval,target);
@elem 要移动的元素
@step 每一次移动的步长(px)
@insterval 定时器间隔时间
@target 最终位置
*/

function linearMove(elem,target,step,insterval) {
  // 定义参数的默认值 当用户没有传入参数时,可以使用默认值

  var step = step || 10;
  var insterval = insterval || 50;

  // 定时器节流
  clearInterval(elem.timer);

  // 根据起点和终点判断 步长的正负
  step = (box.offsetLeft < target) ? step : -step;

  elem.timer = setInterval(function() {
    box.style.left = box.offsetLeft + step + "px";

    // 当距离不到一步时,直接强制设为终点
    if (Math.abs(target - box.offsetLeft) < Math.abs(step)) {
      box.style.left = target + "px";
      clearInterval(elem.timer);
    }

    if (box.offsetLeft <= 0) {
      clearInterval(elem.timer);
    }
  },insterval);
}

/*
封装函数，实现水平减速移动
function slowDownMove(elem,interval,target);
@elem, 要移动的元素
@interval, 定时器的间隔时间
@target, 最终位置
*/

function slowDownMove(elem,target,insterval) {
  // 间隔时间为 50ms
  var insterval = insterval || 50;

  clearInterval(elem.timer);

  elem.timer = setInterval(function() {
    var step = (target - box.offsetLeft) / 20;

    // 使用Math.ceil Math.floor 保证最终box.offsetLeft === target
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    box.style.left = box.offsetLeft + step + "px";

    if (target === box.offsetLeft) {
      clearInterval(elem.timer);
    }
  },insterval);
}

/*
功能：实现一个比较通用的获得浏览器窗口的垂直，水平的滚动距离
返回值：对象
*/

function getScrollValue(){
  if (window.pageYOffset >= 0) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  } else if (document.documentElement.scrollTop >= 0) {
    return {
      left: document.documentElement.scrollLeft,
      top:  document.documentElement.scrollTop
    }
  } else {
    return {
      left: document.body.scrollLeft,
      top:  document.body.scrollTop
    }
  }
}

//全屏方法
function fullScreen(elem){
  if (elem.requestFullscreen){
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen){
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen){
    elem.webkitRequestFullscreen();
    // elem.style.width = "100%";
    // elem.style.height = "100%";
  }

}

//取消全屏
function cancelFullScreen(){
  if (document.cancelFullScreen){
    document.cancelFullScreen();
  } else if (document.mozCancelFullScreen){
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen){
  document.webkitCancelFullScreen();
  }
}
