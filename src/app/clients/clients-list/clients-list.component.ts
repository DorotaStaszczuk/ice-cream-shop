import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent {
  clients$ = this.firestoreService.getAllClients();

  constructor(private firestoreService: FirestoreService) {}
}
