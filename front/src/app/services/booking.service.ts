import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationBody } from '../interfaces/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl = `http://localhost:3000/api/v1/booking`;

  getAllBookings(params: PaginationBody): Observable<any> {
    const httpParams = new HttpParams()
    .set('page', params.page)
    .set('limit', params.limit);
    return this.http.get<any>(this.apiUrl, {params: httpParams});
  }
}
