import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Activity } from '../../../core/models/activity.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [
    trigger('swipeAnimation', [
      state('default', style({ transform: 'translateX(0)', opacity: 1 })),
      state(
        'left',
        style({
          transform: 'translateX(-100%)',
          opacity: 0,
          backgroundColor: 'rgba(255, 0, 0, 0.8)', // czerwony
        })
      ),
      state(
        'right',
        style({
          transform: 'translateX(100%)',
          opacity: 0,
          backgroundColor: 'rgba(0, 255, 0, 0.8)', // zielony
        })
      ),
      transition('default => left', [animate('0.5s ease-out')]),
      transition('default => right', [animate('0.5s ease-out')]),
    ]),
  ],
})
export class MainComponent {
  animationState: string = 'default';
  
  counter: number = 0;
  
  status: string="";

  data: Activity[] = [
    { id: "1", title: "Basketball",category: "Sports and Physical Activity", description: "A fast-paced team sport played with a ball and a hoop.", imageUrl: "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/30/USAT/70715606007-ap-world-cup-us-jordan-basketball.jpg" },
    { id: "2", title: "Football",category: "", description: "A popular sport played with a round ball and two goals.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/1200px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg" },
    { id: "3", title: "Swimming", category: "",description: "An individual or team sport that requires using one's entire body to move through water.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg/800px-40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg" },
    { id: "4", title: "Cycling", category: "",description: "A recreational or competitive activity involving bicycles.", imageUrl: "https://allianceurology.com/wp-content/uploads/2020/11/image1.jpg" },
    { id: "5", title: "Yoga", category: "",description: "A practice combining physical postures, breathing exercises, and meditation.", imageUrl: "https://ocdn.eu/pulscms-transforms/1/ekXk9kpTURBXy8yYWY2YjEwMmI0YWM5OWIwYWY5MTFmYTg0NjA4NTU0OC5qcGeSlQPM2gDNEpPNCnOTBc0EsM0Chd4AAaEwAQ" },
    { id: "6", title: "Running", category: "",description: "A form of cardiovascular exercise involving continuous movement on foot.", imageUrl: "https://media.istockphoto.com/id/1324624694/pl/zdj%C4%99cie/fitness-kobieta-bieganie-szkolenia-dla-maratonu-na-s%C5%82onecznym-szlaku-wybrze%C5%BCa.jpg?s=612x612&w=0&k=20&c=jBFdBdrlnmhRb3NOI8P8ww9o4Q6MMqE0JRUBr4Y85kw=" },
  ];

  activity: Activity = this.data[0];

  

  onSwipe(event: any): void {
    const direction = event.direction;
    if (direction === 2) {
      this.status = "reject"
      this.animationState = 'left';
    } else if (direction === 4) {
      this.status = "accept"
      this.animationState = 'right';
    }
    this.counter++;
    if(this.counter === this.data.length)this.counter=0;
    this.activity = this.data[this.counter];

    // Reset animacji po jej zakończeniu
    setTimeout(() => {
      this.animationState = 'default';
      this.activity = this.data[this.counter];
      this.status = ''; // Usunięcie 'Accepted' / 'Rejected'
    }, 200); // Dopasuj czas do animacji
  }

  onClick(){
    console.log("hello")
  }
}
