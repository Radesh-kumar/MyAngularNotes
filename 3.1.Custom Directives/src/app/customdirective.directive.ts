import { Directive,OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private elementRef:ElementRef) { }
  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor='blue';
  }
}
