import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  onSwipe(event: any): void {
    const direction = event.direction; // Kierunek gestu
    if (direction === 2) {
      console.log('Swipe w lewo!');
    } else if (direction === 4) {
      console.log('Swipe w prawo!');
    }
  }


}
