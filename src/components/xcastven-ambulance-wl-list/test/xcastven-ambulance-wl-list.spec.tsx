import { newSpecPage } from '@stencil/core/testing';
import { XcastvenAmbulanceWlList } from '../xcastven-ambulance-wl-list';

describe('xcastven-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XcastvenAmbulanceWlList],
      html: `<xcastven-ambulance-wl-list></xcastven-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xcastven-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xcastven-ambulance-wl-list>
    `);
  });
});
