import { newSpecPage } from '@stencil/core/testing';
import { XcastvenAmbulanceWlApp } from '../xcastven-ambulance-wl-app';

describe('xcastven-ambulance-wl-app', () => {
  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [XcastvenAmbulanceWlApp],
      html: `<xcastven-ambulance-wl-app base-path="/"></xcastven-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xcastven-ambulance-wl-editor');
  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [XcastvenAmbulanceWlApp],
      html: `<xcastven-ambulance-wl-app base-path="/ambulance-wl/"></xcastven-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget();
    const child = page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual('xcastven-ambulance-wl-list');
  });
});
