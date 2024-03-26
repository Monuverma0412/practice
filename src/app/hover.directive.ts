import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[contentColor]'
})
export class HoverDirective implements OnChanges {
  @Input() color = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['color']) {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    }
  }
}
