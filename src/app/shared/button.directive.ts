import { Directive, Renderer2, HostListener, ElementRef, HostBinding } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';

@Directive({ selector: '[appButton]' })
export class ButtonDirective {
    constructor(private elm: ElementRef, private doms: DomSanitizer, private renderer: Renderer2) { }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elm.nativeElement, 'background-color', 'white');
        this.renderer.setStyle(this.elm.nativeElement, 'color', 'mediumslateblue');
    }
    @HostListener('mouseleave') mouseleave(eventData: Event) {
      this.renderer.setStyle(this.elm.nativeElement, 'background-color', 'mediumslateblue');
      this.renderer.setStyle(this.elm.nativeElement, 'color', 'white');
    }
  
}
