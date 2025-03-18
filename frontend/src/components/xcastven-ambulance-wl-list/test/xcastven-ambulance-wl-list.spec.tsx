import { newSpecPage } from '@stencil/core/testing';
import { XcastvenAmbulanceWlList } from '../xcastven-ambulance-wl-list';

describe('xcastven-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XcastvenAmbulanceWlList],
      html: `<xcastven-ambulance-wl-list></xcastven-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XcastvenAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(items.length).toEqual(expectedPatients);
  });
});
