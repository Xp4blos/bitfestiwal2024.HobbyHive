import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainComponent } from './componens/main/main.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from "../core/core.module";
import { ProfileComponent } from './componens/profile/profile.component';
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent, 
    MainComponent, ProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    SharedModule
],
})
export class HomeModule {}
