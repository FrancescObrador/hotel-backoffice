import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl = `http://localhost:3000/api/v1/booking`;

  getAllBookings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
