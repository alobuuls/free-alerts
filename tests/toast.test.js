import { describe, it, expect, vi } from 'vitest';
import FreeAlerts from '../src/index.js';

describe('FreeAlerts.toast', () => {
  it('debe crear un toast', () => {
    FreeAlerts.toast('Hola mundo');

    const toast = document.querySelector('.free-alerts-toast');

    expect(toast).not.toBeNull();
    expect(toast.textContent).toContain('Hola mundo');
  });

  it('debe eliminar el toast después del tiempo', async () => {
    vi.useFakeTimers();

    FreeAlerts.toast('Auto remove', { duration: 3000 });

    vi.advanceTimersByTime(3500);

    const toast = document.querySelector('.free-alerts-toast');

    expect(toast).toBeNull();

    vi.useRealTimers();
  });
});
