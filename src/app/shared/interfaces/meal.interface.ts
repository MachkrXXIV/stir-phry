export interface Meal {
  name: string;
  mealTime?: string; // breakfast, lunch, dinner, dessert, meal
  instructions?: string[];
  ingredients?: string[];
  calories?: number;
  fat?: number;
  carbohydrates?: number;
  protein?: number;
  duration: number;
}
