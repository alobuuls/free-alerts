import FreeAlerts from '../../src/index.js';

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
    const result = await FreeAlerts.confirm({
      title: 'Eliminar',
      message: '¿Deseas eliminar este registro?',
    });

    DOM_EL.result.textContent = `Confirm result: ${result}`;
  },
};

DOM_EL.container.ctnBtns?.addEventListener('click', e => {
  const btn = e.target.closest('button');

  if (!btn) return;

  ALERT_TYPES[btn.id]?.();
});
