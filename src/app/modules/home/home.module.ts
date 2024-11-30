import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainComponent } from './componens/main/main.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent, 
    MainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}
