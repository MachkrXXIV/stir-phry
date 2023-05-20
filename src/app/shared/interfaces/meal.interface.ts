export interface Meal {
  id: number;
  name: string;
  image: string;
  mealTime?: string; // breakfast, lunch, dinner, dessert, meal
  instructions?: string[];
  ingredients?: string[];
  calories?: number;
  fat?: number;
  carbohydrates?: number;
  protein?: number;
  duration?: number;
}
