import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HotelFeaturesService } from '../../services/hotel-features.service';
import { HotelFeature } from '../../interfaces/hotel-feature.interface';
import { PaginationBody } from '../../interfaces/hotel.interface';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-feature-list.component.html',
  styleUrls: ['./hotel-feature-list.component.css']
})
export class HotelFeatureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<HotelFeature>([]);
  
  pageSizeOptions = [5, 10, 25, 50, 100];
  pageSize = this.pageSizeOptions[1];
  length = 0;
  pageIndex = 0;

  loadingData = true;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private hotelFeaturesService: HotelFeaturesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadHotelFeatures();
  }

  loadHotelFeatures(params: PaginationBody = {page: 0, limit: 10}): void {
    this.loadingData = true;
    this.hotelFeaturesService.getHotelFeatures(params).subscribe({
      next: (response) =>{
        this.dataSource.data = response.results;
        this.length = response.count;
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

    this.loadHotelFeatures(params);
  }
  
}
