//#region src/core/createElement.js
function e(e) {
	let t = document.createElement("div");
	return t.innerHTML = e.trim(), t.firstElementChild;
}
//#endregion
//#region src/utils/icons.js
var t = {
	success: "\n    <svg\n      width=\"20\"\n      height=\"20\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      stroke-width=\"2\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    >\n      <path d=\"M20 6L9 17L4 12\" />\n    </svg>\n  ",
	error: "\n    <svg\n      width=\"20\"\n      height=\"20\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      stroke-width=\"2\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    >\n      <line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\" />\n      <line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\" />\n    </svg>\n  ",
	warning: "\n    <svg\n      width=\"20\"\n      height=\"20\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      stroke-width=\"2\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    >\n      <path d=\"M10.3 3.3l-8.6 14.9A2 2 0 0 0 3.4 21h17.2a2 2 0 0 0 1.7-3L13.7 3.3a2 2 0 0 0-3.4 0z\" />\n      <line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\" />\n      <line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"17\" />\n    </svg>\n  ",
	info: "\n    <svg\n      width=\"20\"\n      height=\"20\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      stroke-width=\"2\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    >\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n      <line x1=\"12\" y1=\"10\" x2=\"12\" y2=\"16\" />\n      <line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"7\" />\n    </svg>\n  "
};
//#endregion
//#region src/core/toast.js
function n(n, r = {}) {
	let i = t[r.type] || "", a = e(`
    <div class="free-alerts-toast ${r.type || ""}">
        <div class="free-alerts-toast-content">
            ${i}
            <span>${n}</span>
        </div>
    </div>
  `);
	document.body.appendChild(a), requestAnimationFrame(() => a.classList.add("show"));
	let o = r.duration || 3e3;
	setTimeout(() => {
		a.classList.remove("show"), setTimeout(() => a.remove(), 300);
	}, o);
}
//#endregion
//#region src/core/alert.js
function r({ title: t = "Aviso", message: n = "" }) {
	let r = e(`
    <div class="free-alerts-overlay">
      <div class="free-alerts-modal">
        <h2>${t}</h2>
        <p>${n}</p>
        <button class="free-alerts-btn">
          Aceptar
        </button>
      </div>

    </div>
  `);
	document.body.appendChild(r), r.querySelector(".free-alerts-btn").addEventListener("click", () => {
		r.remove();
	});
}
//#endregion
//#region src/core/confirm.js
function i({ title: t = "Confirmación", message: n = "" }) {
	return new Promise((r) => {
		let i = e(`
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
    `);
		document.body.appendChild(i), i.querySelector(".cancel").addEventListener("click", () => {
			i.remove(), r(!1);
		}), i.querySelector(".confirm").addEventListener("click", () => {
			i.remove(), r(!0);
		});
	});
}
//#endregion
//#region src/index.js
var a = {
	toast: n,
	success(e, t = {}) {
		return n(e, {
			...t,
			type: "success"
		});
	},
	error(e, t = {}) {
		return n(e, {
			...t,
			type: "error"
		});
	},
	warning(e, t = {}) {
		return n(e, {
			...t,
			type: "warning"
		});
	},
	info(e, t = {}) {
		return n(e, {
			...t,
			type: "info"
		});
	},
	alert: r,
	confirm: i
};
typeof window < "u" && (window.FreeAlerts = a);
//#endregion
export { a as default };
