const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o={timerId:null,isActive:!1,startColor(){this.isActive||(this.isActive=!0,o.timerId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))},stopColor(){clearInterval(o.timerId),this.isActive=!1}};e.addEventListener("click",(()=>{r.removeAttribute("disabled"),e.setAttribute("disabled",""),o.startColor()})),r.addEventListener("click",(()=>{r.setAttribute("disabled",""),e.removeAttribute("disabled"),o.stopColor()}));
//# sourceMappingURL=01-color-switcher.f86020b3.js.map