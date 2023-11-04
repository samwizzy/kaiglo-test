import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpoRoutingModule } from './expo-routing.module';
import { ExpoComponent } from './expo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddressComponent } from './address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ExpoComponent, UserDetailsComponent, AddressComponent],
  imports: [
    CommonModule,
    ExpoRoutingModule,
    NgxSkeletonLoaderModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
})
export class ExpoModule {}
