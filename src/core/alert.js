import { createElement } from './createElement.js';

export function alert({ title = 'Aviso', message = '' }) {
  const modal = createElement(`
    <div class="free-alerts-overlay">
      <div class="free-alerts-modal">
        <h2>${title}</h2>
        <p>${message}</p>
        <button class="free-alerts-btn">
          Aceptar
        </button>
      </div>

    </div>
  `);

  document.body.appendChild(modal);

  modal.querySelector('.free-alerts-btn').addEventListener('click', () => {
    modal.remove();
  });
}
