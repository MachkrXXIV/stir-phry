import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Observable, from, of } from 'rxjs';
import { Meal } from '../interfaces/meal.interface';
import {
  DocumentReference,
  addDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';
import { FirestoreCollection } from '../interfaces/firestore-collection.interface';

const PATH = '/liked-meals';

@Injectable({
  providedIn: 'root',
})
export class LikedRecipesService implements FirestoreCollection<Meal> {
  collectionRef: CollectionReference;

  constructor(private firestore: Firestore) {
    this.collectionRef = collection(this.firestore, PATH);
  }

  async get(meal: Meal): Promise<Meal> {
    const uniqueID = `${meal.name}-${meal.id}`;
    const docRef = doc(this.firestore, PATH, uniqueID);
    const docSnap = await getDoc(docRef);
    return docSnap.data() as Promise<Meal>;
  }

  getAll(): Observable<Meal[]> {
    return collectionData(this.collectionRef) as Observable<Meal[]>;
  }

  async add(meal: Meal) {
    const uniqueID = `${meal.name}-${meal.id}`;
    try {
      await setDoc(doc(this.firestore, PATH, uniqueID), meal);
    } catch (ex) {
      console.error('Error:', ex);
    }
    // const mealDoc = doc(this.firestore, `/saved-meals/${docRef.id}`);
    // await updateDoc(mealDoc, {
    //   id: this.getSavedMealsCount(),
    // });
    // return docRef as DocumentReference<Meal>;
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
