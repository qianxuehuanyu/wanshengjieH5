import { Directive, ElementRef, Input,OnInit } from '@angular/core';

@Directive({ selector: '[appScale]' })
export class ScaleDirective implements OnInit {
  @Input() scaleValue:string;
  constructor(private el: ElementRef) { }
  ngOnInit(){
    this.el.nativeElement.style.transform = 'translateX(-50%) translateY(-40%) scale('+this.scaleValue+')';
  }
}
