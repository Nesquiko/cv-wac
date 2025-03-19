import { newSpecPage } from '@stencil/core/testing';
import { XcastvenAmbulanceWlList } from '../xcastven-ambulance-wl-list';
import fetchMock from 'jest-fetch-mock';
import { WaitingListEntry } from '../../../api/ambulance-wl';

describe('xcastven-ambulance-wl-list', () => {
  const sampleEntries: WaitingListEntry[] = [
    {
      id: 'entry-1',
      patientId: 'p-1',
      name: 'Juraj Prvý',
      waitingSince: new Date('20240203T12:00'),
      estimatedDurationMinutes: 20,
    },
    {
      id: 'entry-2',
      patientId: 'p-2',
      name: 'James Druhý',
      waitingSince: new Date('20240203T12:00'),
      estimatedDurationMinutes: 5,
    },
  ];

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  afterEach(() => {
    fetchMock.resetMocks();
  });

  it('renders', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(sampleEntries));
    const page = await newSpecPage({
      components: [XcastvenAmbulanceWlList],
      html: `<xcastven-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></xcastven-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XcastvenAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;
    await page.waitForChanges();

    const items = page.root.shadowRoot.querySelectorAll('md-list-item');
    expect(expectedPatients).toEqual(sampleEntries.length);
    expect(items.length).toEqual(expectedPatients);
  });

  it('renders error message on network issues', async () => {
    // Mock the network error
    fetchMock.mockRejectOnce(new Error('Network Error'));

    const page = await newSpecPage({
      components: [XcastvenAmbulanceWlList],
      html: `<xcastven-ambulance-wl-list ambulance-id="test-ambulance" api-base="http://test/api"></xcastven-ambulance-wl-list>`,
    });

    const wlList = page.rootInstance as XcastvenAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length;

    // Wait for the DOM to update
    await page.waitForChanges();

    // Query the DOM for error message and list items
    const errorMessage = page.root.shadowRoot.querySelectorAll('.error');
    const items = page.root.shadowRoot.querySelectorAll('md-list-item');

    // Assert that the error message is displayed and no patients are listed
    expect(errorMessage.length).toBeGreaterThanOrEqual(1);
    expect(expectedPatients).toEqual(0);
    expect(items.length).toEqual(expectedPatients);
  });
});
