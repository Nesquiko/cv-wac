import { newE2EPage } from '@stencil/core/testing';

describe('xcastven-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xcastven-ambulance-wl-editor></xcastven-ambulance-wl-editor>');

    const element = await page.find('xcastven-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
