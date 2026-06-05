import FreeAlerts from '@/index.js';

// Selector rápido
const $ = el => document.getElementById(el);

// Elementos del DOM
const DOM_EL = {
  container: {
    ctnBtns: $('ctn-btns'),
  },
  result: $('result'),
};

// Tipos de alerta
const ALERT_TYPES = {
  success: () => FreeAlerts.success('Alerta success'),
  info: () => FreeAlerts.info('Alerta info'),
  warning: () => FreeAlerts.warning('Alerta warning'),
  error: () => FreeAlerts.error('Alerta error'),
  alert: () =>
    FreeAlerts.alert({
      title: 'Atención',
      message: 'Este es un mensaje de alerta',
    }),
  confirm: async () => {
    try {
      const result = await FreeAlerts.confirm({
        title: 'Eliminar',
        message: '¿Deseas eliminar este registro?',
      });

      console.log('Confirm result:', result);

      if (DOM_EL.result) {
        DOM_EL.result.textContent = `Confirm result: ${result}`;
      }
    } catch (err) {
      console.error('Confirm error:', err);
    }
  },
};

// Events
DOM_EL.container.ctnBtns?.addEventListener('click', e => {
  const li = e.target.closest('li');
  if (!li) return;

  const btn = li.querySelector('button');
  if (!btn) return;

  const action = ALERT_TYPES[btn.id];
  action?.();
});
