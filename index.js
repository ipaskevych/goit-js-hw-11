import{a as m,S as d,i as c}from"./assets/vendor-xSEbMgrE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="55981750-407047847782865d9c6ccfb62",h="https://pixabay.com/api/";function y(i){return m.get(h,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data)}const l=document.querySelector(".gallery"),a=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:p})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img class="gallery-image" src="${o}" alt="${e}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><span>${t}</span></p>
        <p class="info-item"><b>Views</b><span>${n}</span></p>
        <p class="info-item"><b>Comments</b><span>${f}</span></p>
        <p class="info-item"><b>Downloads</b><span>${p}</span></p>
      </div>
    </li>
  `).join("");l.innerHTML=r,b.refresh()}function S(){l&&(l.innerHTML="")}function v(){a&&a.classList.add("is-active")}function w(){a&&a.classList.remove("is-active")}const u=document.querySelector(".form");u&&u.addEventListener("submit",$);function $(i){i.preventDefault();const r=i.currentTarget,o=r.elements["search-text"].value.trim();if(o===""){c.warning({title:"Caution",message:"Please enter a search query!",position:"topRight"});return}S(),v(),y(o).then(s=>{if(s.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s.hits)}).catch(s=>{c.error({title:"Error",message:`Something went wrong: ${s.message}`,position:"topRight"})}).finally(()=>{w(),r.reset()})}
//# sourceMappingURL=index.js.map
