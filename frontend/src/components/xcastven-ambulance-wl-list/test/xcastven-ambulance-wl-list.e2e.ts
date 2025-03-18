import { newE2EPage } from '@stencil/core/testing';

describe('xcastven-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xcastven-ambulance-wl-list></xcastven-ambulance-wl-list>');

    const element = await page.find('xcastven-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
