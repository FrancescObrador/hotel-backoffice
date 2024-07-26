import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PaginationBody } from '../../interfaces/hotel.interface';
import { Room } from '../../interfaces/room.interface';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'number', 'hotel', 'roomType', 'actions'];
  dataSource = new MatTableDataSource<Room>([]);

  pageSizeOptions = [5, 10, 25, 50, 100];
  pageSize = this.pageSizeOptions[1];
  length = 0;
  pageIndex = 0;

  loadingData = true;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private roomsService: RoomsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(params: PaginationBody = {page: 0, limit: 10}): void {
    this.loadingData = true;
    this.roomsService.getRooms(params).subscribe({
      next: (response) =>{
        this.dataSource.data = response.results;
        this.length = response.count;
        this.dataSource.sort = this.sort;
        this.loadingData = false;
      },
      error: (error) => {
        console.error('Error loading rooms:', error);
      }
    });
  }

  viewRoomDetail(room: Room): void {
    
  }

  editRoom(id: number): void {
    
  }

  deleteRoom(id: number): void {
    if (confirm('Are you sure you want to delete this room?')) {
      
    }
  }

  onPaginateChange(event: PageEvent): void {
    const params = {
      page: event.pageIndex,
      limit: event.pageSize
    };

    this.loadRooms(params);
  }
  
}
