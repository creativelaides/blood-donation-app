import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReceiversStore } from '../../store/receivers.store';
import { ReceiverListComponent } from '../../components/receiver-list/receiver-list.component';

@Component({
  selector: 'app-receivers-page',
  standalone: true,
  imports: [FormsModule, ReceiverListComponent],
  template: `
    <div class="page-header">
      <h1 class="page-title">Receptores</h1>
    </div>
    <app-receiver-list />
  `
})
export class ReceiversPageComponent {
  store = inject(ReceiversStore);
}