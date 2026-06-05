import { describe, it, expect, afterEach } from 'vitest';
import FreeAlerts from '../src/index.js';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('FreeAlerts.alert', () => {
  it('debe crear un modal con título y mensaje', () => {
    FreeAlerts.alert({
      title: 'Error',
      message: 'Algo pasó',
    });

    const modal = document.querySelector('.free-alerts-modal');
    expect(modal).not.toBeNull();
    expect(modal.textContent).toContain('Error');
    expect(modal.textContent).toContain('Algo pasó');
  });

  it('debe eliminar el modal al hacer click en aceptar', () => {
    FreeAlerts.alert({
      title: 'Aviso',
      message: 'Prueba de cierre',
    });

    const modal = document.querySelector('.free-alerts-modal');
    expect(modal).not.toBeNull();

    document.querySelector('.free-alerts-btn').click();

    const modalAfterClick = document.querySelector('.free-alerts-modal');
    expect(modalAfterClick).toBeNull();
  });
});
