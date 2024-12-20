import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { Activity } from '../../../core/models/activity.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  upcommingActivity: Activity[] | undefined;
  currentActivity: Activity[] | undefined;
  finishedActivity: Activity[] | undefined;
  // Aktywna zakładka
  activeTab: string = 'upcoming';



  userData: User = {id:"1",name: "Antek", surname: "Kowalski", email: "antek_kowalski@gmail.com",tag: [
    "Tag 1","Tag 2","Tag 3"
  ],category: [
  {id: "1",name: "Sports and Physical Activity"}, 
  {id: "1",name:"Art and Crafts "}, 
  {id: "1",name:"Books and Literature "}, 
  {id: "1",name:"Music and Dance " },
  {id: "1",name:"Gaming and E-sports "}, 
  // {id: "1",name:"Cooking and Culinary Arts "}, 
  // {id: "1",name:"Travel and Outdoor "},
  // {id: "1",name:"Technology and IT "},
  // {id: "1",name:"Health and Wellness " },
  // {id: "1",name:"Nature and Gardening "},
  // {id: "1",name:"Animals and Care "},
  // {id: "1",name:"Photography and Film "}, 
  // {id: "1",name:"Fashion " },
  // {id: "1",name:"Science and Experiments "}, 
  // {id: "1",name:"History and Culture" },
  ],activities: [
    { id: "1", title: "Basketball",category: "Sports and Physical Activity", description: "A fast-paced team sport played with a ball and a hoop.",startDate: "2024-11-15",endDate: "2024-11-16", image: "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/30/USAT/70715606007-ap-world-cup-us-jordan-basketball.jpg" },
    { id: "1", title: "Basketball",category: "Sports and Physical Activity", description: "A fast-paced team sport played with a ball and a hoop.",startDate: "2024-11-15",endDate: "2024-11-16", image: "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/30/USAT/70715606007-ap-world-cup-us-jordan-basketball.jpg" },
    { id: "5", title: "Yoga", category: "Sports and Physical Activity",description: "A practice combining physical postures, breathing exercises, and meditation.",startDate: "2024-12-01",endDate: "2024-12-02", image: "https://ocdn.eu/pulscms-transforms/1/ekXk9kpTURBXy8yYWY2YjEwMmI0YWM5OWIwYWY5MTFmYTg0NjA4NTU0OC5qcGeSlQPM2gDNEpPNCnOTBc0EsM0Chd4AAaEwAQ" },
    { id: "5", title: "Yoga", category: "Sports and Physical Activity",description: "A practice combining physical postures, breathing exercises, and meditation.",startDate: "2024-12-01",endDate: "2024-12-02", image: "https://ocdn.eu/pulscms-transforms/1/ekXk9kpTURBXy8yYWY2YjEwMmI0YWM5OWIwYWY5MTFmYTg0NjA4NTU0OC5qcGeSlQPM2gDNEpPNCnOTBc0EsM0Chd4AAaEwAQ" },
    { id: "6", title: "Running", category: "Sports and Physical Activity",description: "A form of cardiovascular exercise involving continuous movement on foot.",startDate: "2024-12-05",endDate: "2024-12-06", image: "https://media.istockphoto.com/id/1324624694/pl/zdj%C4%99cie/fitness-kobieta-bieganie-szkolenia-dla-maratonu-na-s%C5%82onecznym-szlaku-wybrze%C5%BCa.jpg?s=612x612&w=0&k=20&c=jBFdBdrlnmhRb3NOI8P8ww9o4Q6MMqE0JRUBr4Y85kw=" },
    { id: "6", title: "Running", category: "Sports and Physical Activity",description: "A form of cardiovascular exercise involving continuous movement on foot.",startDate: "2024-12-05",endDate: "2024-12-06", image: "https://media.istockphoto.com/id/1324624694/pl/zdj%C4%99cie/fitness-kobieta-bieganie-szkolenia-dla-maratonu-na-s%C5%82onecznym-szlaku-wybrze%C5%BCa.jpg?s=612x612&w=0&k=20&c=jBFdBdrlnmhRb3NOI8P8ww9o4Q6MMqE0JRUBr4Y85kw=" }
  ] };


    // Metoda do ustawienia aktywnej zakładki
    setActiveTab(tab: string): void {
      this.activeTab = tab;
    }

  ngOnInit(): void {
    const today = new Date();
  
    // Aktywności nadchodzące
    this.upcommingActivity = this.userData.activities.filter(activity => {
      const startDate = new Date(activity.startDate);
      return startDate > today; // Aktywności, które jeszcze się nie rozpoczęły
    });
  
    // Aktywności zakończone
    this.finishedActivity = this.userData.activities.filter(activity => {
      const endDate = new Date(activity.endDate);
      return endDate < today; // Aktywności, które już się zakończyły
    });
  
    // Aktywności aktualne
    this.currentActivity = this.userData.activities.filter(activity => {
      const startDate = new Date(activity.startDate);
      const endDate = new Date(activity.endDate);
      return startDate <= today && endDate >= today; // Aktywności, które trwają w tej chwili
    });
  }



}
