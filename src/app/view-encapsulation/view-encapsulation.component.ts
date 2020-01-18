import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css']
})
export class ViewEncapsulationComponent implements OnInit {

  evenNumbers:number[] =[];
  oddNumbers:number[] =[];
  constructor() { }

  ngOnInit() {
  }

  onIntervalFired(firedNumber :number){
    console.log(firedNumber)
    if(firedNumber%2==0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }

}
