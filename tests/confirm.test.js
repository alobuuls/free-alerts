import { describe, it, expect } from 'vitest';
import FreeAlerts from '../src/index.js';

describe('FreeAlerts.confirm', () => {
  it('debe resolver true al confirmar', async () => {
    const promise = FreeAlerts.confirm({
      title: 'Eliminar',
      message: '¿Seguro?',
    });

    document.querySelector('.confirm').dispatchEvent(new Event('click'));

    const result = await promise;

    expect(result).toBe(true);
  });

  it('debe resolver false al cancelar', async () => {
    const promise = FreeAlerts.confirm({
      title: 'Eliminar',
      message: '¿Seguro?',
    });

    document.querySelector('.cancel').dispatchEvent(new Event('click'));

    const result = await promise;

    expect(result).toBe(false);
  });
});
