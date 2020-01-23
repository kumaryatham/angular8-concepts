import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe : Recipe;
  id : number;
  constructor(private recipeService: RecipeService, private router : ActivatedRoute,
    private route : Router ) { }

  ngOnInit() {
    this.recipe = this.recipeService.getRecipes()[+this.router.snapshot.params['id']];
    this.router.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        console.log('printing recipe details'+this.recipe)
      }
    );
  }

  addToShoppinglist(){
    console.log('adding to shopping ingreadiatnts'+this.recipe.ingrediants)
    this.recipeService.addIngrediantsToShoppingList(this.recipe.ingrediants)
  }

  editRecipe(){
    this.route.navigate(['edit'],{relativeTo: this.router});
    // below one is navigate to same route
    //this.route.navigate(['../',this.id,'edit'],{relativeTo : this.router});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['../'],{relativeTo:this.router});
  }
}
