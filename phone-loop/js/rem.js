(function (doc, win) {
    var docEl = doc.documentElement,//html
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        // 以320宽度的屏幕为标准做适配
        if(clientWidth > 640){
          docEl.style.fontSize = '40px';//改变根元素的字体大小
        }else {
          docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';//改变根元素的字体大小
        }
        
      };
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);

  // 1rem  = 20px 