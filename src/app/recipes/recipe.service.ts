import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
import { RecipesComponent } from './recipes.component';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  constructor(private shoppingListService: ShoppingListService) {}
  
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tomato',
  //     'This is a Tomato Curry',
  //     'https://onedaycart.com/odcb/wp-content/uploads/2015/12/maxresdefault1.jpg',
  //     [
  //         new Ingredient('Tomatoes', 1),
  //         new Ingredient('Onions', 1),
  //         new Ingredient('Curry Leaves', 10)
  //     ]),
  //   new Recipe(
  //     'Biryani',
  //     'This is a chicken biryani',
  //     'https://b.zmtcdn.com/data/pictures/chains/2/91662/e8dbc0aacca39bcddec86225759d6b6e.jpg',
  //     [
  //         new Ingredient('Chicken', 1),
  //         new Ingredient('Onions', 1),
  //         new Ingredient('Curd', 1),
  //         new Ingredient('Basmati', 500),
          
  //     ]),
  // ];

  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
      this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
