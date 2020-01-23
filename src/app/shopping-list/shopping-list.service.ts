import { Ingrediants } from "../shared/ingrediants.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingrediantsChanged = new Subject<Ingrediants[]>();
    startEditing = new Subject<number>();
    private ingrediants:Ingrediants[] = [
        new Ingrediants('apples',5),
        new Ingrediants('tomotos',10)
      ];

    getIngrediants(){
        return this.ingrediants.slice();
    }

    getIngrediant(index: number){
        return this.ingrediants[index];
    }

    addIngrediants(ingrediantsList :Ingrediants[]){
        console.log('adding ingrediant'+ingrediantsList);
        this.ingrediants.push(...ingrediantsList);
        //console.log(`total ingrediant ${this.ingrediants}`)
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }

    updateIngrediants(index:number, ingrediant : Ingrediants){
        this.ingrediants[index] = ingrediant;
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }

    deleteIngredeiants(index: number){
        console.log("deleting the ingrediants"+index)
        this.ingrediants.splice(index,1);
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
}