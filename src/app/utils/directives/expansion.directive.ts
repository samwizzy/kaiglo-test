import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appExpansion]',
})
export class ExpansionDirective implements OnInit, AfterViewInit {
  @HostBinding('style.color') color!: string;

  @HostListener('click') onClick() {
    if (this.color) {
      this.color = '';
    } else {
      this.color = '#ff0000';
    }
  }

  constructor(
    private elementRef: ElementRef,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const elem = this.elementRef.nativeElement as HTMLDivElement;

    const titleEl = elem.querySelector('.title');

    // this.renderer.addClass(titleEl, 'text-red-600');

    const sibling = elem.nextElementSibling;
  }
}
