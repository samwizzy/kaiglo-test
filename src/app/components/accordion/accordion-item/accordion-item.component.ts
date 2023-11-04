import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent {
  @Input() item: any;

  show: boolean = false;

  toggle() {
    this.show = !this.show;
  }
}
