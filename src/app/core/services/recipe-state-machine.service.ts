import { Injectable } from '@angular/core';
import { RecipeState } from '../interfaces/recipe-state.interface';

@Injectable({
  providedIn: 'root',
})
export class RecipeStateMachineService {
  constructor() {}

  getRecipeState(key: string) {
    // check if in localstorage, if null then set default
    const state = localStorage.getItem(key);
    const defaultState: RecipeState = {
      isSaved: false,
      isLiked: false,
      isTried: false,
    };
    return state ? (JSON.parse(state) as RecipeState) : defaultState;
  }

  setRecipeState(key: string, state: RecipeState) {
    const stringState = JSON.stringify(state);
    localStorage.setItem(key, stringState);
  }

  deleteLocalState(key: string) {
    localStorage.removeItem(key);
  }

  deleteEmpty(key: string, state: RecipeState) {
    if (!state.isLiked && !state.isSaved && !state.isTried) {
      localStorage.removeItem(key);
    }
  }
}
