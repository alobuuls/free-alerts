import { createElement } from './createElement.js';
import { ICONS } from '../utils/icons.js';

export function toast(message, options = {}) {
  const icon = ICONS[options.type] || '';

  const toast = createElement(`
    <div class="free-alerts-toast ${options.type || ''}">
        <div class="free-alerts-toast-content">
            ${icon}
            <span>${message}</span>
        </div>
    </div>
  `);

  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));
  const duration = options.duration || 3000;

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
