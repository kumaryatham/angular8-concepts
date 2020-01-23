import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id : number;
  isEdit :boolean = false;
  recipeForm : FormGroup;

  constructor( private routerO : Router, private router : ActivatedRoute, 
    private fb : FormBuilder,
    private recipeService : RecipeService) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.isEdit = params['id']!=null;
      }
    );
    this.formInit();
  }

  private formInit(){
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    let recipeIngrediants = new FormArray([]);

    if(this.isEdit){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImgPath = recipe.imagePath;
      if(recipe['ingrediants']){
        for(let ingrediant of recipe['ingrediants']){
          recipeIngrediants.push(this.fb.group({
            'name' : [ingrediant.name,Validators.required],
            'amount' : [ingrediant.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
          }))
        }
      }
    }
    this.recipeForm = this.fb.group({
      'name' : [recipeName,Validators.required],
      'description' : [recipeDescription,Validators.required],
      'imagePath' : [recipeImgPath, Validators.required],
      'ingrediants' : recipeIngrediants
    });
  }

  onAddIngrediants(){

    (<FormArray>this.recipeForm.get('ingrediants')).push(this.fb.group({
      'name':['',Validators.required],
      'amount':['', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]]
    }));
  }

  onSubmit(){
    if(this.isEdit){
      this.recipeService.updateRecipe(this.id,this.recipeForm.value);
    }else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }


  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.routerO.navigate(['../../'], {relativeTo: this.router})
  }

  onCancel(){
    this.routerO.navigate(['../'], {relativeTo: this.router})
    //this.recipeForm.reset();
  }

  onIngrediantDelete(index : number){
    (<FormArray>this.recipeForm.get('ingrediants')).removeAt(index);
  }

}
