import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Hotel } from '../../components/interfaces/hotel.interface';
import { HotelService } from '../../services/hotel.service';


@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrl: './hotel-detail.component.css',
})
export class HotelDetailComponent implements OnInit {
  hotel: Hotel | undefined;
  stars: string = '⭐️⭐️⭐️⭐️⭐️';
  selectedTabIndex: number = 0;
  imagesLoadedCount: number = 0;
  loadingData: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private hotelService: HotelService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.loadHotelDetails(id);
  }

  loadHotelDetails(id: number): void {
    this.loadingData = true;
    this.hotelService.getHotelById(id).subscribe({
      next: (hotel) => {
        this.hotel = hotel;
        this.stars  = '⭐️'.repeat(hotel.stars);

        if(this.hotel.media.length == 0) {
          this.loadingData = false;
        }
      },
      error: (error) => {
        console.error('Error loading hotel:', error);
      }
    });
  }

  onImageLoad(){
    this.imagesLoadedCount++;
    if (this.imagesLoadedCount === this.hotel?.media.length) {
      this.loadingData = false;
    }
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
