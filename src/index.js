// Importa estilos automáticamente (Vite los incluye en build)
import './styles/free-alerts.css';

// Core
import { toast } from './core/toast.js';
import { alert } from './core/alert.js';
import { confirm } from './core/confirm.js';

// API principal de la librería
const FreeAlerts = {
  // Shortcuts
  success(message, options = {}) {
    return toast(message, { ...options, type: 'success' });
  },

  error(message, options = {}) {
    return toast(message, { ...options, type: 'error' });
  },

  warning(message, options = {}) {
    return toast(message, { ...options, type: 'warning' });
  },

  info(message, options = {}) {
    return toast(message, { ...options, type: 'info' });
  },

  // Modales
  alert,
  confirm,
};

export default FreeAlerts;

// 👇 Soporte para uso sin bundler (script tag en HTML)
if (typeof window !== 'undefined') {
  window.FreeAlerts = FreeAlerts;
}
