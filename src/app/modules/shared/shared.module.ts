import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { PinMapComponent } from './components/pin-map/pin-map.component';

@NgModule({
  declarations: [MapComponent, PinMapComponent],
  imports: [CommonModule],
  exports: [MapComponent, PinMapComponent],
})
export class SharedModule {}
