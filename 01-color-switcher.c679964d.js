!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),i={timerId:null,isActive:!1,startColor:function(){this.isActive||(this.isActive=!0,i.timerId=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3))},stopColor:function(){clearInterval(i.timerId),this.isActive=!1}};e.addEventListener("click",(function(){o.removeAttribute("disabled"),e.setAttribute("disabled",""),i.startColor()})),o.addEventListener("click",(function(){o.setAttribute("disabled",""),e.removeAttribute("disabled"),i.stopColor()}))}();
//# sourceMappingURL=01-color-switcher.c679964d.js.map
