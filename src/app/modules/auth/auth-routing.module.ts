import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { FormComponent } from './components/form/form.component';
import { AuthPageComponent } from './components/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'page', pathMatch: 'full' },
      { path: 'form', component: FormComponent },
      { path: 'page', component: AuthPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
