import { Component, Host, h } from '@stencil/core';
import '@material/web/list/list';
import '@material/web/list/list-item';
import '@material/web/icon/icon';

interface Patient {
  name: string;
  patientId: string;
  estimatedStart: Date;
  estimatedDurationMinutes: number;
  condition: string;
}

@Component({
  tag: 'xcastven-ambulance-wl-list',
  styleUrl: 'xcastven-ambulance-wl-list.css',
  shadow: true,
})
export class XcastvenAmbulanceWlList {
  waitingPatients: Patient[];

  private async getWaitingPatientsAsync(): Promise<Patient[]> {
    return [
      {
        name: 'Jožko Púčik',
        patientId: '10001',
        estimatedStart: new Date(Date.now() + 65 * 60),
        estimatedDurationMinutes: 15,
        condition: 'Kontrola',
      },
      {
        name: 'Bc. August Cézar',
        patientId: '10096',
        estimatedStart: new Date(Date.now() + 30 * 60),
        estimatedDurationMinutes: 20,
        condition: 'Teploty',
      },
      {
        name: 'Ing. Ferdinand Trety',
        patientId: '10028',
        estimatedStart: new Date(Date.now() + 5 * 60),
        estimatedDurationMinutes: 15,
        condition: 'Bolesti hrdla',
      },
    ];
  }

  async componentWillLoad() {
    this.waitingPatients = await this.getWaitingPatientsAsync();
  }

  render() {
    return (
      <Host>
        <md-list>
          {this.waitingPatients.map(patient => (
            <md-list-item>
              <div slot="headline">{patient.name}</div>
              <div slot="supporting-text">{'Predpokladaný vstup: ' + patient.estimatedStart?.toLocaleString()}</div>
              <md-icon slot="start">person</md-icon>
            </md-list-item>
          ))}
        </md-list>
      </Host>
    );
  }
}
