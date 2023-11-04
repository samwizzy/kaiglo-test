import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DumbComponent } from './dumb/dumb.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  animations: [
    trigger('slideIn', [
      state('open', style({ transform: 'translateX(0)' })),
      state('close', style({ transform: 'translateX(-100%)' })),

      // transition('* => *', [animate('1s ease-out')]),
      transition('close => open', [animate('1s ease-in')]),
      transition('open => close', [animate('1s ease-in')]),
    ]),
  ],
})
export class DynamicComponent {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  show$ = new BehaviorSubject<boolean>(false);

  toggle() {
    this.show$.next(!this.show$.value);
  }

  createComponent() {
    const dumbCompRef = this.container.createComponent(DumbComponent);

    dumbCompRef.instance.name = ''; // this will not trigger ngOnChange lifecycle
    dumbCompRef.setInput('name', 'Samuel'); // this will trigger ngOnChange lifecycle
  }
}
