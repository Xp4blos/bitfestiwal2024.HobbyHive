import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import L, { Map } from 'leaflet';
import { SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  @Input() radius!: number;
  private map!: Map;
  private circle!: L.Circle | null;
  constructor() {}

  private initMap(): void {
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

    // Listen for map clicks
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      //delete old circle when new added
      if (this.circle) {
        this.map.removeLayer(this.circle);
      }
      //adding circle
      this.circle = L.circle([lat, lng], {
        radius: this.radius, // Example radius in meters
        color: 'darkblue',
        fillColor: '#2e9498',
        fillOpacity: 0.5,
      }).addTo(this.map);
    });
  }
  updateCircleRadius(): void {
    if (this.circle) {
      this.circle.setRadius(this.radius);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['radius'] && this.circle) {
      this.updateCircleRadius();
    }
  }
  ngOnInit(): void {
    this.initMap();
  }
}
