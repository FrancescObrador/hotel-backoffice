import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HotelService } from '../../services/hotel.service';
import { Hotel, HotelsPaginationBody } from '../../components/interfaces/hotel.interface';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'email', 'stars', 'actions'];
  dataSource = new MatTableDataSource<Hotel>([]);
  
  pageSizeOptions = [5, 10, 25, 50, 100];
  pageSize = this.pageSizeOptions[1];
  length = 0;
  pageIndex = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private hotelService: HotelService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadHotels();
  }

  loadHotels(params: HotelsPaginationBody = {page: 0, limit: 10}): void {
    
    this.hotelService.getAllHotels(params).subscribe({
      next: (response) => {
        console.log(response.data)
        this.dataSource.data = response.data;
        this.length = response.total;
        this.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.error('Error loading hotels:', error);
      }
    });
  }

  viewHotelDetails(hotel: Hotel): void {
    this.router.navigate(['/hotels', hotel.id]);
  }

  editHotel(id: number): void {
    this.router.navigate(['/hotels/edit', id]);
  }

  deleteHotel(id: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      this.hotelService.deleteHotel(id).subscribe({
        next: () => {
          this.loadHotels();
        }
      });
    }
  }

  onPaginateChange(event: PageEvent): void {
    const params = {
      page: event.pageIndex,
      limit: event.pageSize
    };

    this.loadHotels(params);
  }
  
}