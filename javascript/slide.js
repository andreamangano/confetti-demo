document.addEventListener("DOMContentLoaded",function(){function e(){var e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(e<600){var n=document.getElementById("js-slide-image");window.addEventListener("scroll",function(){var e=document.body.scrollTop||document.documentElement.scrollTop,t=n.offsetTop,o=t-e;o<0?document.body.addClassName("is-slide-top"):document.body.removeClassName("is-slide-top")})}else window.removeEventListener("scroll",!1)}function n(){s?d.removeClassName(a):d.addClassName(a),s=!s}var t=document.getElementById("js-open-menu-button"),o=document.getElementById("js-close-menu-button"),s=!1,a="is-menu-opened",d=document.body||document.documentElement;Element.prototype.hasClassName=function(e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(this.className)},Element.prototype.addClassName=function(e){this.hasClassName(e)||(this.className=this.className?[this.className,e].join(" "):e)},Element.prototype.removeClassName=function(e){if(this.hasClassName(e)){var n=this.className;this.className=n.replace(new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)","g"),"")}},document.onkeydown=function(e){e=e||window.event,37==e.keyCode&&navigation.prev&&(window.location=navigation.prev.data.url),39==e.keyCode&&navigation.next&&(window.location=navigation.next.data.url)},t.addEventListener("click",function(e){e.preventDefault(),n()}),o.addEventListener("click",function(e){e.preventDefault(),n()}),e(),window.addEventListener("resize",e)});