import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './components/auth-page/auth-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormComponent, AuthComponent, AuthPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, FormsModule],
})
export class AuthModule {}
