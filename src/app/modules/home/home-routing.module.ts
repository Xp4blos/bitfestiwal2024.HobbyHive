import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { MainComponent } from './componens/main/main.component';
import { HomeComponent } from './home.component';
 

const routes: Routes = [
  {
    path: 'app',
    component: HomeComponent,
    children: [{ path: 'main', component: MainComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
