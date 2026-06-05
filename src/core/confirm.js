import { createElement } from './createElement.js';

export function confirm({ title = 'Confirmación', message = '' }) {
  return new Promise(resolve => {
    const modal = createElement(`
      <div class="free-alerts-overlay">
        <div class="free-alerts-modal">
          <h2>${title}</h2>
          <p>${message}</p>

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

    document.body.appendChild(modal);

    modal.querySelector('.cancel').addEventListener('click', () => {
      modal.remove();
      resolve(false);
    });

    modal.querySelector('.confirm').addEventListener('click', () => {
      modal.remove();
      resolve(true);
    });
  });
}
