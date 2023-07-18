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
  deleteDoc,
  getCountFromServer,
  updateDoc,
  query,
  where,
  getDocs,
  QuerySnapshot,
  DocumentData,
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
    let snapshot = await getCountFromServer(mealsRef);
    return snapshot.data;
  }

  async addSavedMeal(meal: Meal) {
    const docRef = await addDoc(
      collection(this.firestore, '/saved-meals'),
      meal
    );
    const mealDoc = doc(this.firestore, `/saved-meals/${docRef.id}`);
    // await updateDoc(mealDoc, {
    //   id: this.getSavedMealsCount(),
    // });
    return docRef as DocumentReference<Meal>;
  }

  async deleteSavedMeal(meal: Meal) {
    const collectionRef = collection(this.firestore, '/saved-meals');
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
    // const mealDoc = doc(this.firestore, '/saved-meals', meal.name);
    // await deleteDoc(doc(this.firestore, 'saved-meals', meal.id.toString()));
  }
}
