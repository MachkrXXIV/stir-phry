import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
} from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { Meal } from '../interfaces/meal.interface';
import {
  DocumentReference,
  addDoc,
  deleteDoc,
  getCountFromServer,
  updateDoc,
  query,
  where,
  getDocs,
  QuerySnapshot,
  DocumentData,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { FirestoreCollection } from '../interfaces/firestore-collection.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreRecipesService implements FirestoreCollection<Meal> {
  constructor(private firestore: Firestore) {}

  private async fetchFromFirestore(id: string, collectionName: string) {
    const docRef = doc(this.firestore, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Promise<Meal>;
  }

  get(id: string, collectionName: string): Observable<Meal> {
    return from(this.fetchFromFirestore(id, collectionName));
  }

  getAll(collectionName: string): Observable<Meal[]> {
    const collectionRef = collection(this.firestore, collectionName);
    return collectionData(collectionRef) as Observable<Meal[]>;
  }

  async getItemCount(collectionName: string) {
    let collectionRef = collection(this.firestore, collectionName);
    let snapshot = await getCountFromServer(collectionRef);
    return snapshot.data().count;
  }

  async add(meal: Meal, collectionName: string) {
    try {
      await setDoc(doc(this.firestore, collectionName, meal.id), meal);
    } catch (ex) {
      console.error('Error:', ex);
    }
  }

  async delete(meal: Meal, collectionName: string) {
    const collectionRef = collection(this.firestore, collectionName);
    const q = query(
      collectionRef,
      where('id', '==', meal.id),
      where('name', '==', meal.name)
    );
    try {
      const qSnap = await getDocs(q);
      qSnap.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    } catch (ex) {
      console.error("Can't find/delete document", ex);
    }
  }
}
