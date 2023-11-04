import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';
import { TestComponent } from './test/test.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'temp',
    component: TempComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'dynamic',
    component: DynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
