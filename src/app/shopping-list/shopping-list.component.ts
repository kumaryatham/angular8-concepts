import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingrediants:Ingrediants[];
  private iGSubscription : Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingrediants = this.shoppingListService.getIngrediants();
    this.iGSubscription = this.shoppingListService.ingrediantsChanged.subscribe(
      (ingrediantsList : Ingrediants[])=>{
        this.ingrediants = ingrediantsList;
      }
    )
  }

  onIngrediantsAdded(ingrediantsList : Ingrediants[]){
    this.shoppingListService.addIngrediants(ingrediantsList);
  }

  ngOnDestroy(){
    console.log('Unsubscribe hook called in shopping list')
    this.iGSubscription.unsubscribe();
  }
  

}
