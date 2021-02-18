import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective {

  constructor(private elementRef: ElementRef) {
    const element = elementRef.nativeElement;
    console.log(element);

    element.style.fontWeight = 'bold';
  }

}
