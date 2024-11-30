import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [{ path: 'form', component: FormComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
