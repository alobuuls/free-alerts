import { describe, it, expect, afterEach } from 'vitest';
import FreeAlerts from '../src/index.js';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('FreeAlerts.confirm', () => {
  it('debe resolver true al confirmar', async () => {
    const promise = FreeAlerts.confirm({
      title: 'Eliminar',
      message: '¿Seguro?',
    });

    const modal = document.querySelector('.free-alerts-modal');
    expect(modal).not.toBeNull();

    document.querySelector('.confirm').click();

    const result = await promise;
    expect(result).toBe(true);
  });

  it('debe resolver false al cancelar', async () => {
    const promise = FreeAlerts.confirm({
      title: 'Eliminar',
      message: '¿Seguro?',
    });

    const modal = document.querySelector('.free-alerts-modal');
    expect(modal).not.toBeNull();

    document.querySelector('.cancel').click();

    const result = await promise;
    expect(result).toBe(false);
  });
});
