import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Hotel, HotelsPaginationBody } from '../../components/interfaces/hotel.interface';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HotelFeaturesService } from '../../services/hotel-features.service';
import { HotelFeature } from '../../components/interfaces/hotel-feature.interface';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-feature-list.component.html',
  styleUrls: ['./hotel-feature-list.component.css']
})
export class HotelFeatureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<HotelFeature>([]);
  
  loadingData = true;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private hotelFeaturesService: HotelFeaturesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadHotelFeatures();
  }

  loadHotelFeatures(): void {
    this.loadingData = true;
    this.hotelFeaturesService.getHotelFeatures().subscribe({
      next: (response) =>{
        this.dataSource.data = response.results;
        this.dataSource.sort = this.sort;
        this.loadingData = false;
      },
      error: (error) => {
        console.error('Error loading hotels:', error);
      }
    });
  }

  deleteHotelFeature(id: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      
    }
  }

  onPaginateChange(event: PageEvent): void {
    const params = {
      page: event.pageIndex,
      limit: event.pageSize
    };
  }
  
}
