(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s=document.querySelectorAll(".nav-link");s.forEach(function(o){o.addEventListener("click",function(r){r.preventDefault();const n=this.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth"})})});function i(){window.scrollTo({top:0,behavior:"smooth"})}function d(){const o=document.getElementById("scrollToTopBtn");document.documentElement.scrollTop>0?o.style.display="block":o.style.display="none"}document.getElementById("scrollToTopBtn").addEventListener("click",i);window.addEventListener("scroll",d);
//# sourceMappingURL=scroll-to-top-64ba7ae8.js.map
