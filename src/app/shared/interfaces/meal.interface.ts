export interface Meal {
  id: string;
  name: string;
  image?: string;
  summary?: string;
  mealType?: string; // breakfast, lunch, dinner, dessert, meal
  tags?: string[];
  instructions?: string[];
  ingredients?: any[];
  calories?: number;
  fat?: number;
  carbohydrates?: number;
  sugar?: number;
  sodium?: number;
  cholesterol?: number;
  protein?: number;
  prepTimeInMinutes?: number;
  sourceUrl?: string;
  dateAdded?: Date;
}
