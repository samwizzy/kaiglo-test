import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { register } from 'swiper/element/bundle';
import { TempComponent } from './temp/temp.component';
import { TestComponent } from './test/test.component';
import { DirectivesModule } from '../utils/directives/directives.module';
import { AccordionModule } from '../components/accordion/accordion.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DumbComponent } from './dynamic/dumb/dumb.component';

register();

@NgModule({
  declarations: [TempComponent, TestComponent, DynamicComponent, DumbComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    DirectivesModule,
    AccordionModule,
    DragDropModule,
  ],
})
export class PagesModule {}
