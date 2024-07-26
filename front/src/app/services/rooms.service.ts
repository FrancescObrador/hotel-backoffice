import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelFeaturesResponse } from '../interfaces/hotel-feature.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationBody } from '../interfaces/hotel.interface';
import { RoomsResponse } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl = `http://localhost:3000/api/v1/rooms`;

  getRooms(params: PaginationBody): Observable<RoomsResponse> {
    const httpParams = new HttpParams()
    .set('page', params.page)
    .set('limit', params.limit);
    return this.http.get<RoomsResponse>(this.apiUrl, { params: httpParams });
  }

  deleteRoom(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

