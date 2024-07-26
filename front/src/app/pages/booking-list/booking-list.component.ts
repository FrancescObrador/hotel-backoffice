import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Hotel } from '../../interfaces/hotel.interface';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../interfaces/booking.interface';

@Component({
  selector: 'app-bookin-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'checkInDate', 'checkOutDate', 'actions'];
  dataSource = new MatTableDataSource<Booking>([]);
  
  pageSizeOptions = [5, 10, 25, 50, 100];
  pageSize = this.pageSizeOptions[1];
  length = 0;
  pageIndex = 0;

  loadingData = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private bookingService: BookingService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {
    this.loadingData = true;
    this.bookingService.getAllBookings().subscribe({
      next: (response) =>{
        this.dataSource.data = response.results;
        this.length = response.count;
        this.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loadingData = false;
      },
      error: (error) => {
        console.error('Error loading bookings:', error);
      }
    });
  }

  viewBookingDetails(booking: Booking): void {
    this.router.navigate(['/bookings', booking.id]);
  }

  onPaginateChange(event: PageEvent): void {
    const params = {
      page: event.pageIndex,
      limit: event.pageSize
    };

    this.loadBookings();
  }
  
}
