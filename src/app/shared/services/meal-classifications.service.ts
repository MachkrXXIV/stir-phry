import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MealClassificationsService {
  private mealTypes = [
    'Breakfast',
    'Brunch',
    'Lunch',
    'Dinner',
    'Dessert',
    'Appetizer',
    'Snack',
    'Sauce',
    'Marinade',
    'Beverage',
  ];

  private tags = [
    'Popular',
    'Cheap',
    'Healthy',
    'Quick',
    'Pasta',
    'Salad',
    'Seafood',
    'Sandwich',
    'Burger',
    'Pizza',
    'Barbeque',
    'Mexican',
    'Taco',
    'Chicken',
    'Asian',
    'Thai',
    'Chinese',
    'Sushi',
    'Vietnamese',
    'Soup',
    'Italian',
    'Greek',
    'Japanese',
    'Beef',
    'Pork',
    'Yogurt',
    'Smoothie',
    'Eggs',
    'High-protein',
    'Fish',
    'Salmon',
    'Cod',
    'Tuna',
    'Stir-fry',
    'Vegan',
    'Vegetarian',
    'Keto',
    'Nachos',
    'Wrap',
    'Spaghetti',
    'Grill',
    'Boil',
    'Chili',
    'Pancake',
    'Bowl',
    'High-protein',
    'Steak',
    'Fried',
    'Cake',
    'Cookie',
    'Bread',
    'Ice cream',
    'Pudding',
    'Coffee',
    'Juice',
    'Gluten-free',
    'Dairy-free',
    'Keto',
    'Low-carb',
    'Pie',
    'Turkey',
    'Oatmeal',
    'American',
    'Mediterranean',
    'Indian',
    'Middle Eastern',
    'Southern/Soul',
    'Korean',
    'Gourmet',
    'Chili',
  ];

  getMealTypes(): string[] {
    return this.mealTypes;
  }

  getTags(): string[] {
    return this.tags;
  }

  constructor() {}
}
