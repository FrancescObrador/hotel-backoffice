import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelFeaturesResponse } from '../interfaces/hotel-feature.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationBody } from '../interfaces/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomFeaturesService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl = `http://localhost:3000/api/v1/room-feature`;

  getRoomFeatures(params: PaginationBody): Observable<HotelFeaturesResponse> {
    const httpParams = new HttpParams()
    .set('page', params.page)
    .set('limit', params.limit);
    return this.http.get<HotelFeaturesResponse>(this.apiUrl, { params: httpParams });
  }

  deleteRoomFeature(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

