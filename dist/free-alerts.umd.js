(function(e,t){typeof exports==`object`&&typeof module<`u`?module.exports=t():typeof define==`function`&&define.amd?define([],t):(e=typeof globalThis<`u`?globalThis:e||self,e.FreeAlerts=t())})(this,function(){function e(e){let t=document.createElement(`div`);return t.innerHTML=e.trim(),t.firstElementChild}var t={success:`
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M20 6L9 17L4 12" />
    </svg>
  `,error:`
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  `,warning:`
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10.3 3.3l-8.6 14.9A2 2 0 0 0 3.4 21h17.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12" y2="17" />
    </svg>
  `,info:`
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="10" x2="12" y2="16" />
      <line x1="12" y1="7" x2="12" y2="7" />
    </svg>
  `};function n(n,r={}){let i=t[r.type]||``,a=e(`
    <div class="free-alerts-toast ${r.type||``}">
        <div class="free-alerts-toast-content">
            ${i}
            <span>${n}</span>
        </div>
    </div>
  `);document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add(`show`));let o=r.duration||3e3;setTimeout(()=>{a.classList.remove(`show`),setTimeout(()=>a.remove(),300)},o)}function r({title:t=`Aviso`,message:n=``}){let r=e(`
    <div class="free-alerts-overlay">
      <div class="free-alerts-modal">
        <h2>${t}</h2>
        <p>${n}</p>
        <button class="free-alerts-btn">
          Aceptar
        </button>
      </div>

    </div>
  `);document.body.appendChild(r),r.querySelector(`.free-alerts-btn`).addEventListener(`click`,()=>{r.remove()})}function i({title:t=`Confirmación`,message:n=``}){return new Promise(r=>{let i=e(`
      <div class="free-alerts-overlay">
        <div class="free-alerts-modal">
          <h2>${t}</h2>
          <p>${n}</p>

          <div class="free-alerts-actions">
            <button class="cancel">
              Cancelar
            </button>
            <button class="confirm">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    `);document.body.appendChild(i),i.querySelector(`.cancel`).addEventListener(`click`,()=>{i.remove(),r(!1)}),i.querySelector(`.confirm`).addEventListener(`click`,()=>{i.remove(),r(!0)})})}var a={toast:n,success(e,t={}){return n(e,{...t,type:`success`})},error(e,t={}){return n(e,{...t,type:`error`})},warning(e,t={}){return n(e,{...t,type:`warning`})},info(e,t={}){return n(e,{...t,type:`info`})},alert:r,confirm:i};return typeof window<`u`&&(window.FreeAlerts=a),a});