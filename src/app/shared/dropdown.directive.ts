import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';
import {EventListener} from '@angular/core/src/debug/debug_node';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.elementRef.nativeElement.nextSibling, 'show');
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) { // Got help from Maximilian's video
    if (this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.addClass(this.elementRef.nativeElement.nextSibling, 'show');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.nextSibling, 'show');
    }
  }
}
