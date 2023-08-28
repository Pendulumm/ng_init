import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNeedEm]'
})
export class NeedEmDirective {

  constructor(e: ElementRef) {
    // console.log('needEm directive initialized.');
    console.log('Ref>>>', e);
    // 
    // HTMLElement: style property
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
    /* 
        CSS property names are converted to JavaScript identifier with these rules:
        If the property is made of one word, it remains as it is: height stays as is (in lowercase).
        If the property is made of several words, separated by dashes,
        the dashes are removed and it is converted to camelCase: background - attachment becomes backgroundAttachment.
        The property float, being a reserved JavaScript keyword, is converted to cssFloat.
        The style property has the same priority in the CSS cascade as an inline style declaration set via the style attribute. 
     */

    e.nativeElement.style.background = '#fcc';
    e.nativeElement.style.padding = '10px';
    e.nativeElement.style.color = '#a33';
  }

}
