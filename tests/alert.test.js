import { describe, it, expect } from 'vitest';
import FreeAlerts from '../src/index.js';

describe('FreeAlerts.alert', () => {
  it('debe crear un modal', () => {
    FreeAlerts.alert({
      title: 'Error',
      message: 'Algo pasó',
    });

    const modal = document.querySelector('.free-alerts-modal');

    expect(modal).not.toBeNull();
    expect(modal.textContent).toContain('Error');
  });
});
