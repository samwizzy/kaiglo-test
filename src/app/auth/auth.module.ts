import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, GoogleSigninButtonModule],
})
export class AuthModule {}
