import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { HotelFeature } from '../../interfaces/hotel-feature.interface';
import { RoomFeaturesService } from '../../services/room-features.service';
import { PaginationBody } from '../../interfaces/hotel.interface';

@Component({
  selector: 'app-room-feature-list',
  templateUrl: './room-feature-list.component.html',
  styleUrls: ['./room-feature-list.component.css']
})
export class RoomFeatureListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<HotelFeature>([]);

  pageSizeOptions = [5, 10, 25, 50, 100];
  pageSize = this.pageSizeOptions[1];
  length = 0;
  pageIndex = 0;

  loadingData = true;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private roomFeatureService: RoomFeaturesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadRoomFeatures();
  }

  loadRoomFeatures(params: PaginationBody = {page: 0, limit: 10}): void {
    this.loadingData = true;
    this.roomFeatureService.getRoomFeatures(params).subscribe({
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

  deleteRoomFeature(id: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      
    }
  }

  onPaginateChange(event: PageEvent): void {
    const params = {
      page: event.pageIndex,
      limit: event.pageSize
    };

    this.loadRoomFeatures(params);
  }
  
}
