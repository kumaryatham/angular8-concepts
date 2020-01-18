import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomBetterDirective]'
})
export class CustomBetterDirectiveDirective implements OnInit{
 
  @Input() defaultColor: string = 'transparent';
  //@Input() highlightedColor : string = 'blue';
  @Input('appCustomBetterDirective') highlightedColor : string = 'blue';

  constructor(private elementRef:ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue');
    this.backgroundColor = this.defaultColor;
  }



  @HostBinding('style.backgroundColor') backgroundColor : string = this.defaultColor;
  @HostListener('mouseenter') mouseover(eventData : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'blue');
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData : Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
