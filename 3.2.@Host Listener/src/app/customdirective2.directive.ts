import { Directive,Renderer2,OnInit,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective2]'
})
export class Customdirective2Directive {
constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red');
  }
  @HostListener('mouseenter') mouseenter(eventData:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','yellow');
  }
  @HostListener('click') mouseclick(eventData:Event){
    this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor','red');
  }
}
