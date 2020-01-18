import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {

  @Input() parentData='';
  @Output() customEvent = new EventEmitter<{name: string, content: string}>();
  constructor() { }

  ngOnInit() {
  }

  onEventTrigger(){
    this.customEvent.emit({name: 'somename', content:'somecontent'});
  }

}
