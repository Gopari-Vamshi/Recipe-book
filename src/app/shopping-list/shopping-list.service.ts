import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 5),
    new Ingredient('Onions', 1),
  ];

  getIngredients() {
    this.ingredients.sort((a, b) => (a.name < b.name ? -1 : 1));
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.sortingShoppingList();
  }

            /* sorting shopping list */
  sortingShoppingList() {
    this.ingredients.sort((a, b) => (a.name < b.name ? -1 : 1));
    let ingredientsHolder = {};
    this.ingredients.forEach(function(d){
      if(ingredientsHolder.hasOwnProperty(d.name.charAt(0).toUpperCase()+d.name.toLowerCase().slice(1))){
        ingredientsHolder[d.name.charAt(0).toUpperCase()+d.name.toLowerCase().slice(1)] = +ingredientsHolder[d.name.charAt(0).toUpperCase()+d.name.toLowerCase().slice(1)] + +d.amount;
      } else {
        ingredientsHolder[d.name.charAt(0).toUpperCase()+d.name.toLowerCase().slice(1)] = + +d.amount;
      }
    });
    let newIngredients = [];
    for(var prop in ingredientsHolder) {
      newIngredients.push({name: prop, amount:ingredientsHolder[prop]});
      this.ingredientsChanged.next(newIngredients.slice());
    }
    this.ingredients = newIngredients;
  }

  addIngredients(ingredients: Ingredient[]) {
    //   for(let ingredient of ingredients) {
    //       this.addIngredient(ingredient);
    //   }
    this.ingredients.push(...ingredients);
    this.sortingShoppingList();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.sortingShoppingList();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
