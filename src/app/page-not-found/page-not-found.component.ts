import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router'

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  errorMessage :string ;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.router.snapshot.data['message'];
    this.router.data.subscribe(
      (data : Data ) =>{
        this.errorMessage = data['message'];
      }
    );
  }

}
