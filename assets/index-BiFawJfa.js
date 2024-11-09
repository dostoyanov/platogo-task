(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();function r(c,t){const s=document.getElementById(c);t.forEach(i=>{const e=document.createElement("div");e.classList.add("offer-row"),i.limited_time&&e.classList.add("offer-row--limited-time"),e.innerHTML=`
      <span class="promotion-value">${i.promotion_value}</span>
      ${i.limited_time?`<span class="limited-time">${i.limited_time}</span>`:""}
      <div class="coins-container">
        <div class="coins ${i.coins_class}"></div>
        <span class="regular-coins">${i.regular_coins}</span>
        <span class="promotion-coins">${i.promotion_coins}</span>
      </div>
      <span class="ticket-value">${i.ticket_value}</span>
      <div class="price-btn">
        <div class="btn-text">${i.price}</div>
      </div>
    `,s.appendChild(e)})}const l=[{promotion_value:"+100%",regular_coins:"20.000",promotion_coins:"40.000",ticket_value:"1",price:"€ 2,99",coins_class:"coins-1"},{promotion_value:"+300%",limited_time:"Only for a limited time!",regular_coins:"80.000",promotion_coins:"320.000",ticket_value:"2",price:"€ 1,99",coins_class:"coins-2"},{promotion_value:"+100%",regular_coins:"1.500.000",promotion_coins:"3.000.000",ticket_value:"8",price:"€ 9,99",coins_class:"coins-3"},{promotion_value:"+100%",regular_coins:"2.000.000",promotion_coins:"4.000.000",ticket_value:"10",price:"€ 14,99",coins_class:"coins-4"}];r("offers-container",l);
