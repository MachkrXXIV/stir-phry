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

const PATH = '/saved-meals';
@Injectable({
  providedIn: 'root',
})
export class SavedMealsService implements FirestoreCollection<Meal> {
  collectionRef: CollectionReference;

  constructor(private firestore: Firestore) {
    this.collectionRef = collection(this.firestore, PATH);
  }

  private async fetchFromFirestore(id: string) {
    // const compactName = meal.name.split(' ').join('-');
    // const uniqueID = `CUSTOM-${compactName}`;
    const docRef = doc(this.firestore, PATH, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Promise<Meal>;
  }

  private async search(meal: Meal) {
    const q = query(
      this.collectionRef,
      where('id', '==', meal.id),
      where('name', '==', meal.name)
    );
    return await getDocs(q);
  }
  // change this to id?
  get(id: string): Observable<Meal> {
    return from(this.fetchFromFirestore(id));
    // const docRef = doc(this.firestore, PATH, meal.id.toString());
    // docData(docRef, { idField: 'id' });
  }

  getAll(): Observable<Meal[]> {
    return collectionData(this.collectionRef) as Observable<Meal[]>;
  }

  async getSavedMealsCount() {
    let mealsRef = collection(this.firestore, '/saved-meals');
    let snapshot = await getCountFromServer(mealsRef);
    return snapshot.data;
  }

  async add(meal: Meal) {
    try {
      await setDoc(doc(this.firestore, PATH, meal.id), meal);
    } catch (ex) {
      console.error('Error:', ex);
    }

    // firegen way
    // return await addDoc(this.collectionRef, meal).then((docref) => {
    //   if (meal.id == '') {
    //     updateDoc(docref, { id: docref.id });
    //     meal.id = docref.id;
    //   }
    // });
  }

  async delete(meal: Meal) {
    const q = query(
      this.collectionRef,
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
