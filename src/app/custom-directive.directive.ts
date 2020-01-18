import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective implements OnInit {

  constructor(private elementRef : ElementRef) { }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='green';
  }  

}
