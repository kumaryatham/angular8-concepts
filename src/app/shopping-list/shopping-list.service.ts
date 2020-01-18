import { Ingrediants } from "../shared/ingrediants.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingrediantsChanged = new Subject<Ingrediants[]>();
    private ingrediants:Ingrediants[] = [
        new Ingrediants('apples',5),
        new Ingrediants('tomotos',10)
      ];

    getIngrediants(){
        return this.ingrediants.slice();
    }

    addIngrediants(ingrediantsList :Ingrediants[]){
        console.log('adding ingrediant'+ingrediantsList);
        this.ingrediants.push(...ingrediantsList);
        //console.log(`total ingrediant ${this.ingrediants}`)
        this.ingrediantsChanged.next(this.ingrediants.slice());
    }
}