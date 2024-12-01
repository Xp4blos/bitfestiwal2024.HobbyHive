import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import L, { Map } from 'leaflet';
import { icon, Marker } from 'leaflet';

@Component({
  selector: 'app-pin-map',
  templateUrl: './pin-map.component.html',
  styleUrl: './pin-map.component.scss',
})
export class PinMapComponent implements OnInit {
  @Input() lat: number = 50.29761;
  @Input() lng: number = 18.67658;
  private map!: Map;
  private marker!: L.Marker;
  constructor() {}

  private initMap(): void {
    let customIcon = L.icon({
      iconUrl: 'marker-icon-2x.png', // Path to marker icon
      iconSize: [25, 41], // Size of the marker
      iconAnchor: [12, 41], // Anchor point for the icon
      popupAnchor: [1, -34], // Popup position
      shadowUrl: 'marker-shadow.png', // Path to shadow image
      shadowSize: [41, 41], // Size of the shadow
    });

    this.map = L.map('map', {
      center: [50.29761, 18.67658],
      zoom: 13,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );
    tiles.addTo(this.map);
    //adding marker
    this.marker = L.marker([this.lat, this.lng], { icon: customIcon }).addTo(
      this.map
    );
  }

  ngOnInit(): void {
    this.initMap();
  }
}
