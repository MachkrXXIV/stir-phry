export interface Meal {
  id: number;
  name: string;
  image?: string;
  mealType?: string; // breakfast, lunch, dinner, dessert, meal
  tags?: string[];
  instructions?: string[];
  ingredients?: string[];
  calories?: number;
  fat?: number;
  carbohydrates?: number;
  protein?: number;
  prepTimeInMinutes?: number;
}
