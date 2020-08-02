import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  @ViewChild(ShoppingEditComponent) shoppingEdit: ShoppingEditComponent;
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.igChangeSub = this.shoppinglistService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
    
  }

  onDelete(index: number) {
    this.shoppinglistService.deleteIngredient(index);
    this.shoppingEdit.onClear();
  }
  
  onEditItem(index: number) {
    this.shoppinglistService.startedEditing.next(index);
  }
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
