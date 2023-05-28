export interface RecipeForm {
  id: any;
  name: string;
  image?: string;
  mealType?: string;
  tags?: string[];
  ingredients: string[];
  instructions: string[];
  prepTimeInMinutes?: number;
}
