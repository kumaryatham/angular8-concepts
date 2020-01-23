import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingrediants } from 'src/app/shared/ingrediants.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // Better approache: Getting form fileds by using formGroup, instead of reference elements.
  @ViewChild('nameInput' ,{static : false}) nameInputRef: ElementRef;
  @ViewChild('amountInput' ,{static : false}) amountInputRef: ElementRef;
  @ViewChild('f',{static : false}) formSubmit : NgForm; 

  subscription :Subscription;
  editMode = false;
  editedItemIndex :number;
  editedItem : Ingrediants;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index : number)=>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngrediant(index);
        this.formSubmit.setValue({
              name : this.editedItem.name,
              amount : this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy(){
    console.log('Unsubscribe hook called in shopping edit')
    this.subscription.unsubscribe();
  }

  onAddItem(){
    if(this.editMode == true){
      this.shoppingListService.updateIngrediants(this.editedItemIndex, new Ingrediants(this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value) );
      console.log("edited mode triggered"+this.editedItemIndex);
    }else{
      this.shoppingListService.addIngrediants([
        new Ingrediants(this.nameInputRef.nativeElement.value,
                        this.amountInputRef.nativeElement.value)]);
    }
    this.editMode = false;
    this.formSubmit.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredeiants(this.editedItemIndex);
    this.formReset();
  }

  formReset(){
    this.formSubmit.reset();
    this.editMode = false;
  }
 }