import { newE2EPage } from '@stencil/core/testing';

describe('xcastven-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xcastven-ambulance-wl-app></xcastven-ambulance-wl-app>');

    const element = await page.find('xcastven-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
