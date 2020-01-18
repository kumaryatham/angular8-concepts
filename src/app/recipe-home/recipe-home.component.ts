import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-home',
  templateUrl: './recipe-home.component.html',
  styleUrls: ['./recipe-home.component.css']
})
export class RecipeHomeComponent implements OnInit {
   loadFeature = 'recipe';
  //loadFeature= 'shopping-list';
  constructor( private router: ActivatedRoute) { }

  ngOnInit() {
    this.loadFeature = this.router.snapshot.data['loadFeature']
  }
  onNavigate(feature:string){
    this.loadFeature = feature;
  }

}
