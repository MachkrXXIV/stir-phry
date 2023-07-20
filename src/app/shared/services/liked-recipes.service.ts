import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Meal } from '../interfaces/meal.interface';
import {
  DocumentReference,
  addDoc,
  deleteDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { FirestoreCollection } from '../interfaces/firestore-collection.interface';

@Injectable({
  providedIn: 'root',
})
export class LikedRecipesService implements FirestoreCollection<Meal> {
  collectionRef: CollectionReference;

  constructor(private firestore: Firestore) {
    this.collectionRef = collection(this.firestore, '/liked-recipes');
  }

  async get() {
    return collectionData(this.collectionRef) as Observable<Meal[]>;
  }

  async add(meal: Meal) {
    const docRef = await addDoc(this.collectionRef, meal);
    // const mealDoc = doc(this.firestore, `/saved-meals/${docRef.id}`);
    // await updateDoc(mealDoc, {
    //   id: this.getSavedMealsCount(),
    // });
    return docRef as DocumentReference<Meal>;
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
