import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css']
})
export class CompOneComponent implements OnInit {

  isDisabled = false;
  serverMsg = 'Server not yet initialized';
  serverName = '';
  username = '';
  isTrueField = true;
  divColor = 'green';
  elements = [];
  parentData = "Its parent Data";

  childData = {}

  constructor() {
    setTimeout(()=> {
        this.isDisabled =true;
        this.serverMsg = 'Server initialized, ready to start';
    }, 2000)
   }

  ngOnInit() {
  }

  onClick(event : Event) {
      
      console.log('Click event triggered {{event.}}')
      this.serverMsg = 'Server Started successfully';
  }

  onInput(event : Event){
    console.log('Click event triggered {{event.}}')
    this.serverName = (<HTMLInputElement>event.target).value;
    this.serverMsg = 'Server Started successfully with name '+this.serverName;
  }

  isTrue() {
    return this.isTrueField;
  }

  getColor(){
    return this.divColor;
  }
  addMoreDivs(){
    this.elements.push(new Date());
  }

  onParentEvent( someData : {name:string, content:string}){
    this.childData = someData;
  }
}

