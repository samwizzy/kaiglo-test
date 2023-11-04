import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
