import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpansionDirective } from './expansion.directive';

@NgModule({
  declarations: [ExpansionDirective],
  imports: [CommonModule],
  exports: [ExpansionDirective],
})
export class DirectivesModule {}
