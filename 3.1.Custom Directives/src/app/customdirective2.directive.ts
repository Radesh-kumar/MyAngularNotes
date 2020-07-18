import { Directive,Renderer2,OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective2]'
})
export class Customdirective2Directive {
constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red');
  }
}
