import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Hotel } from '../../components/interfaces/hotel.interface';
import { HotelMedia } from '../../components/interfaces/hotel-media.interface';
import { HotelFeature } from '../../components/interfaces/hotel-feature.interface';
import { HotelService } from '../../services/hotel.service';


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css',
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel | undefined;
  media: HotelMedia[] = [];
  features: HotelFeature[] = [];
  stars: string = '⭐️⭐️⭐️⭐️⭐️';
  selectedTabIndex: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private hotelService: HotelService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadHotelDetails(id);
  }

  loadHotelDetails(id: number): void {
    this.hotelService.getHotelById(id).subscribe({
      next: (hotel) => {
        this.hotel = hotel;
      this.stars  = '⭐️'.repeat(hotel.stars);
      },
      error: (error) => {
        console.error('Error loading hotel:', error);
      }
    });

    this.hotelService.getHotelMedia(id).subscribe({
      next: (media) => {
        this.media = media;
      },
      error: (error) => {
        console.error('Error loading media:', error);
      }
    });

    this.hotelService.getHotelFeatures(id).subscribe({
      next: (features) => {
        this.features = features;
      },
      error: (error) => {
        console.error('Error loading features:', error);
      }
    });
  }

  onTabChange(event: MatTabChangeEvent): void {
    this.selectedTabIndex = event.index;
  }

  deleteHotel(id: number): void {
    this.hotelService.deleteHotel(id).subscribe({
      next: () => {
        this.router.navigate(['/hotels']);
      },
      error: (error) => {
        console.error('Error deleting hotel:', error);
      }
    });
  }
}
