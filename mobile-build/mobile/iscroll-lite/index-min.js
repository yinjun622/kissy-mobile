(function(){var i=Math,g=/webkit/i.test(navigator.appVersion)?"webkit":/firefox/i.test(navigator.userAgent)?"Moz":"opera"in window?"O":"";/android/gi.test(navigator.appVersion);var j=/iphone|ipad/gi.test(navigator.appVersion),t=/playbook/gi.test(navigator.appVersion),u=/hp-tablet/gi.test(navigator.appVersion),p="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,h="ontouchstart"in window&&!u,v=g+"Transform"in document.documentElement.style,w=j||t,x=function(){return window.requestAnimationFrame||
window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return setTimeout(a,17)}}(),q=window.cancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,n="onorientationchange"in window?"orientationchange":"resize",o=h?"touchstart":"mousedown",
k=h?"touchmove":"mousemove",l=h?"touchend":"mouseup",m=h?"touchcancel":"mouseup",r="translate"+(p?"3d(":"("),s=p?",0)":")",j=function(a,c){var b;this.wrapper="object"==typeof a?a:document.getElementById(a);this.wrapper.style.overflow="hidden";this.scroller=this.wrapper.children[0];this.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,onRefresh:null,onBeforeScrollStart:function(a){a.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,
onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null};for(b in c)this.options[b]=c[b];this.x=this.options.x;this.y=this.options.y;this.options.useTransform=v?this.options.useTransform:!1;this.options.hScrollbar=this.options.hScroll&&this.options.hScrollbar;this.options.vScrollbar=this.options.vScroll&&this.options.vScrollbar;this.options.useTransition=w&&this.options.useTransition;this.scroller.style[g+"TransitionProperty"]=this.options.useTransform?"-"+g.toLowerCase()+
"-transform":"top left";this.scroller.style[g+"TransitionDuration"]="0";this.scroller.style[g+"TransformOrigin"]="0 0";this.options.useTransition&&(this.scroller.style[g+"TransitionTimingFunction"]="cubic-bezier(0.33,0.66,0.66,1)");this.options.useTransform?this.scroller.style[g+"Transform"]=r+this.x+"px,"+this.y+"px"+s:this.scroller.style.cssText+=";position:absolute;top:"+this.y+"px;left:"+this.x+"px";this.refresh();this._bind(n,window);this._bind(o);h||this._bind("mouseout",this.wrapper)};j.prototype=
{enabled:!0,x:0,y:0,steps:[],scale:1,handleEvent:function(a){switch(a.type){case o:if(!h&&0!==a.button)break;this._start(a);break;case k:this._move(a);break;case l:case m:this._end(a);break;case n:this._resize();break;case "mouseout":this._mouseout(a);break;case "webkitTransitionEnd":this._transitionEnd(a)}},_resize:function(){this.refresh()},_pos:function(a,c){a=this.hScroll?a:0;c=this.vScroll?c:0;this.options.useTransform?this.scroller.style[g+"Transform"]=r+a+"px,"+c+"px"+s+" scale("+this.scale+
")":(a>>=0,c>>=0,this.scroller.style.left=a+"px",this.scroller.style.top=c+"px");this.x=a;this.y=c},_start:function(a){var c=h?a.touches[0]:a,b,e;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,a);this.options.useTransition&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;if(this.options.momentum&&(this.options.useTransform?(b=getComputedStyle(this.scroller,null)[g+
"Transform"].replace(/[^0-9-.,]/g,"").split(","),e=1*b[4],b=1*b[5]):(e=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),b=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),e!=this.x||b!=this.y))this.options.useTransition?this._unbind("webkitTransitionEnd"):q(this.aniTime),this.steps=[],this._pos(e,b);this.startX=this.x;this.startY=this.y;this.pointX=c.pageX;this.pointY=c.pageY;this.startTime=a.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,
a);this._bind(k);this._bind(l);this._bind(m)}},_move:function(a){var c=h?a.touches[0]:a,b=c.pageX-this.pointX,e=c.pageY-this.pointY,d=this.x+b,f=this.y+e,g=a.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,a);this.pointX=c.pageX;this.pointY=c.pageY;if(0<d||d<this.maxScrollX)d=this.options.bounce?this.x+b/2:0<=d||0<=this.maxScrollX?0:this.maxScrollX;if(0<f||f<this.maxScrollY)f=this.options.bounce?this.y+e/2:0<=f||0<=this.maxScrollY?0:this.maxScrollY;
this.distX+=b;this.distY+=e;this.absDistX=i.abs(this.distX);this.absDistY=i.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(f=this.y,e=0):this.absDistY>this.absDistX+5&&(d=this.x,b=0)),this.moved=!0,this._pos(d,f),this.dirX=0<b?-1:0>b?1:0,this.dirY=0<e?-1:0>e?1:0,300<g-this.startTime&&(this.startTime=g,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,a))},_end:function(a){if(!(h&&0!=
a.touches.length)){var c=h?a.changedTouches[0]:a,b,e,d={dist:0,time:0},f={dist:0,time:0},g=(a.timeStamp||Date.now())-this.startTime;b=this.x;e=this.y;var y=Math.abs(c.pageX-this.pointX),j=Math.abs(c.pageY-this.pointY);this._unbind(k);this._unbind(l);this._unbind(m);this.options.onBeforeScrollEnd&&this.options.onBeforeScrollEnd.call(this,a);if(!this.moved&&6>y&&6>j){if(h){for(b=c.target;1!=b.nodeType;)b=b.parentNode;"SELECT"!=b.tagName&&"INPUT"!=b.tagName&&"TEXTAREA"!=b.tagName&&(e=document.createEvent("MouseEvents"),
e.initMouseEvent("click",!0,!0,a.view,1,c.screenX,c.screenY,c.clientX,c.clientY,a.ctrlKey,a.altKey,a.shiftKey,a.metaKey,0,null),e._fake=!0,b.dispatchEvent(e))}this._resetPos(200)}else{if(300>g&&this.options.momentum){d=b?this._momentum(b-this.startX,g,-this.x,this.scrollerW-this.wrapperW+this.x,this.options.bounce?this.wrapperW:0):d;f=e?this._momentum(e-this.startY,g,-this.y,0>this.maxScrollY?this.scrollerH-this.wrapperH+this.y:0,this.options.bounce?this.wrapperH:0):f;b=this.x+d.dist;e=this.y+f.dist;
if(0<this.x&&0<b||this.x<this.maxScrollX&&b<this.maxScrollX)d={dist:0,time:0};if(0<this.y&&0<e||this.y<this.maxScrollY&&e<this.maxScrollY)f={dist:0,time:0}}d.dist||f.dist?(c=i.max(i.max(d.time,f.time),10),this.scrollTo(b>>0,e>>0,c)):this._resetPos(200)}this.options.onTouchEnd&&this.options.onTouchEnd.call(this,a)}},_resetPos:function(a){var c=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,b=0<=this.y||0<this.maxScrollY?0:this.y<this.maxScrollY?this.maxScrollY:this.y;c==this.x&&b==this.y?
this.moved&&(this.options.onScrollEnd&&this.options.onScrollEnd.call(this),this.moved=!1):this.scrollTo(c,b,a||0)},_mouseout:function(a){var c=a.relatedTarget;if(c)for(;c=c.parentNode;)if(c==this.wrapper)return;this._end(a)},_transitionEnd:function(a){a.target==this.scroller&&(this._unbind("webkitTransitionEnd"),this._startAni())},_startAni:function(){var a=this,c=a.x,b=a.y,e=Date.now(),d,f,g;a.animating||(a.steps.length?(d=a.steps.shift(),d.x==c&&d.y==b&&(d.time=0),a.animating=!0,a.moved=!0,a.options.useTransition)?
(a._transitionTime(d.time),a._pos(d.x,d.y),a.animating=!1,d.time?a._bind("webkitTransitionEnd"):a._resetPos(0)):(g=function(){var h=Date.now();if(h>=e+d.time){a._pos(d.x,d.y);a.animating=false;a.options.onAnimationEnd&&a.options.onAnimationEnd.call(a);a._startAni()}else{h=(h-e)/d.time-1;f=i.sqrt(1-h*h);h=(d.x-c)*f+c;a._pos(h,(d.y-b)*f+b);if(a.animating)a.aniTime=x(g)}},g()):a._resetPos(400))},_transitionTime:function(a){this.scroller.style[g+"TransitionDuration"]=a+"ms"},_momentum:function(a,c,b,
e,d){var c=i.abs(a)/c,f=c*c/0.0012;0<a&&f>b?(b+=d/(6/(6.0E-4*(f/c))),c=c*b/f,f=b):0>a&&f>e&&(e+=d/(6/(6.0E-4*(f/c))),c=c*e/f,f=e);return{dist:f*(0>a?-1:1),time:c/6.0E-4>>0}},_offset:function(a){for(var c=-a.offsetLeft,b=-a.offsetTop;a=a.offsetParent;)c-=a.offsetLeft,b-=a.offsetTop;return{left:c,top:b}},_bind:function(a,c,b){(c||this.scroller).addEventListener(a,this,!!b)},_unbind:function(a,c,b){(c||this.scroller).removeEventListener(a,this,!!b)},destroy:function(){this.scroller.style[g+"Transform"]=
"";this._unbind(n,window);this._unbind(o);this._unbind(k);this._unbind(l);this._unbind(m);this._unbind("mouseout",this.wrapper);this.options.useTransition&&this._unbind("webkitTransitionEnd");this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var a;this.wrapperW=this.wrapper.clientWidth;this.wrapperH=this.wrapper.clientHeight;this.scrollerW=this.scroller.offsetWidth;this.scrollerH=this.scroller.offsetHeight;this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-
this.scrollerH;this.dirY=this.dirX=0;this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);a=this._offset(this.wrapper);this.wrapperOffsetLeft=-a.left;this.wrapperOffsetTop=-a.top;this.scroller.style[g+"TransitionDuration"]="0";this._resetPos(200)},scrollTo:function(a,c,b,e){var d=a;this.stop();d.length||(d=[{x:a,y:c,time:b,relative:e}]);a=0;for(c=d.length;a<c;a++)d[a].relative&&(d[a].x=this.x-
d[a].x,d[a].y=this.y-d[a].y),this.steps.push({x:d[a].x,y:d[a].y,time:d[a].time||0});this._startAni()},scrollToElement:function(a,c){var b;if(a=a.nodeType?a:this.scroller.querySelector(a))b=this._offset(a),b.left+=this.wrapperOffsetLeft,b.top+=this.wrapperOffsetTop,b.left=0<b.left?0:b.left<this.maxScrollX?this.maxScrollX:b.left,b.top=0<b.top?0:b.top<this.maxScrollY?this.maxScrollY:b.top,c=void 0===c?i.max(2*i.abs(b.left),2*i.abs(b.top)):c,this.scrollTo(b.left,b.top,c)},disable:function(){this.stop();
this._resetPos(0);this.enabled=!1;this._unbind(k);this._unbind(l);this._unbind(m)},enable:function(){this.enabled=!0},stop:function(){q(this.aniTime);this.steps=[];this.animating=this.moved=!1}};"undefined"!==typeof exports?exports.iScroll=j:window.iScroll=j})();KISSY.add("mobile/iscroll-lite/",function(){return iScroll});
