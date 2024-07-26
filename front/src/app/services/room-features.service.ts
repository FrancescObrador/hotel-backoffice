import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelFeaturesResponse } from '../interfaces/hotel-feature.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomFeaturesService {

  constructor(
    private http: HttpClient,
  ) { }

  private apiUrl = `http://localhost:3000/api/v1/room-feature`;

  getRoomFeatures(): Observable<HotelFeaturesResponse> {
    return this.http.get<HotelFeaturesResponse>(this.apiUrl);
  }

  deleteRoomFeature(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

