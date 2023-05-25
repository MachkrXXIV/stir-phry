export interface RecipeForm {
  id: number;
  name: string;
  image?: string;
  mealType?: string;
  tags?: string[];
  ingredients: string[];
  instructions: string[];
  prepTimeInMinutes?: number;
}
