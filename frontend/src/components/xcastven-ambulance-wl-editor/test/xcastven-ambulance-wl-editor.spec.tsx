import { newSpecPage } from '@stencil/core/testing';
import { XcastvenAmbulanceWlEditor } from '../xcastven-ambulance-wl-editor';

describe('xcastven-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [XcastvenAmbulanceWlEditor],
      html: `<xcastven-ambulance-wl-editor entry-id="@new"></xcastven-ambulance-wl-editor>`,
    });
    let items: any = page.root.shadowRoot.querySelectorAll('md-filled-button');
    expect(items.length).toEqual(1);
    items = page.root.shadowRoot.querySelectorAll('md-outlined-button');
    expect(items.length).toEqual(1);

    items = page.root.shadowRoot.querySelectorAll('md-filled-tonal-button');
    expect(items.length).toEqual(1);
  });
});
