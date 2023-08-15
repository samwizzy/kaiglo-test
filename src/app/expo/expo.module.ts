import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpoRoutingModule } from './expo-routing.module';
import { ExpoComponent } from './expo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddressComponent } from './address/address.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExpoComponent, UserDetailsComponent, AddressComponent],
  imports: [CommonModule, ExpoRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ExpoModule {}
