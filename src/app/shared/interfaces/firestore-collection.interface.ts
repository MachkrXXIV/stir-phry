import { CollectionReference, DocumentReference } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface FirestoreCollection<T> {
  get(id: string, collectionName: string): Observable<T>;
  getAll(collectionName: string): Observable<T[]>;
  add(item: T, collectionName: string): Promise<void>;
  delete(item: T, collectionName: string): Promise<void>;
}
