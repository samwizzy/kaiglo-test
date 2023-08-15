import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpoComponent } from './expo.component';

const routes: Routes = [{ path: '', component: ExpoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpoRoutingModule { }
