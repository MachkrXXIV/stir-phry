import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stir-phry';
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;
  faCoffee = faCoffee;

  constructor() {
    const aCollection = collection(this.firestore, 'items');
    this.items$ = collectionData(aCollection);
  }
}
