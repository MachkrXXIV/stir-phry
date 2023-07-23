import { CollectionReference, DocumentReference } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface FirestoreCollection<T> {
  collectionRef: CollectionReference;
  get(item: T): Promise<T>;
  getAll(): Observable<T[]>;
  add(item: T): Promise<void>;
  delete(item: T): Promise<void>;
}
