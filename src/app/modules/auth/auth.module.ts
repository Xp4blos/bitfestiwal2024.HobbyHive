import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    FormComponent, 
    AuthComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
