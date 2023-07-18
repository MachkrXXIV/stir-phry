import { CollectionReference, DocumentReference } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface FirestoreCollection<T> {
  collectionRef: CollectionReference;
  get(): Promise<Observable<T[]>>;
  add(item: T): Promise<DocumentReference<T>>;
  delete(item: T): Promise<void>;
}
