export interface Meal {
  id: number;
  name: string;
  image?: string;
  mealType?: string; // breakfast, lunch, dinner, dessert, meal
  categories?: string[];
  instructions?: string[];
  ingredients?: string[];
  calories?: number;
  fat?: number;
  carbohydrates?: number;
  protein?: number;
  duration?: number;
}
