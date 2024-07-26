import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelFeaturesResponse } from '../interfaces/hotel-feature.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelFeaturesService {
 
  constructor(private http: HttpClient) {}

  private apiUrl = `http://localhost:3000/api/v1/hotel-feature`;

  getHotelFeatures(): Observable<HotelFeaturesResponse> {
    return this.http.get<HotelFeaturesResponse>(this.apiUrl);
  }

  deleteHotelFeature(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
