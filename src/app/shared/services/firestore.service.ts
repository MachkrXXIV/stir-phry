import { Injectable } from '@angular/core';
import {
  CollectionReference,
  Firestore,
  collection,
  collectionData,
  doc,
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { Meal } from '../interfaces/meal.interface';
import {
  DocumentReference,
  addDoc,
  getCountFromServer,
  updateDoc,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {} //fix this entire thing

  savedMealsCollection!: CollectionReference<Meal[]>;

  getSavedMeals(): Observable<Meal[]> {
    let mealsRef = collection(this.firestore, '/saved-meals');
    return collectionData(mealsRef) as Observable<Meal[]>;
  }

  async getSavedMealsCount() {
    let mealsRef = collection(this.firestore, '/saved-meals');
    const snapshot = await getCountFromServer(mealsRef);
    return snapshot.data;
  }

  async addSavedMeal(meal: Meal) {
    const docRef = await addDoc(
      collection(this.firestore, '/saved-meals'),
      meal
    );
    await updateDoc(docRef, {
      id: this.getSavedMealsCount(),
    });
    return docRef as DocumentReference<Meal>;
  }
}
