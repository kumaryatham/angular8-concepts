import { Recipe } from "./recipe.model";
import { SlicePipe } from "@angular/common";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingrediants } from "../shared/ingrediants.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    recipeSelected  = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A test recipe One', 
            'Description one',
            './assets/download.jpg',
            [new Ingrediants('Mutton',10),
            new Ingrediants('Chicken', 5)]),
        new Recipe('A test recipe Two', 
            'Description two',
            './assets/download.jpg',
            [new Ingrediants('Spices',100),
            new Ingrediants('Vegetables', 50)])
      ];

      constructor(private shoppingListService : ShoppingListService){}

    getRecipes(){
        //It will return duplicate recipes Object
        return this.recipes.slice();
    }

    getRecipe(index : number){
        return this.recipes[index];
    }
    
    addIngrediantsToShoppingList(ingrediants : Ingrediants[]){
        this.shoppingListService.addIngrediants(ingrediants);
    }
}