import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelFeaturesResponse } from '../interfaces/hotel-feature.interface';
import { Observable } from 'rxjs';
import { PaginationBody } from '../interfaces/hotel.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelFeaturesService {
 
  constructor(private http: HttpClient) {}

  private apiUrl = `http://localhost:3000/api/v1/hotel-feature`;

  getHotelFeatures(params: PaginationBody): Observable<HotelFeaturesResponse> {
    const httpParams = new HttpParams()
    .set('page', params.page)
    .set('limit', params.limit);
    return this.http.get<HotelFeaturesResponse>(this.apiUrl, { params: httpParams });
  }

  deleteHotelFeature(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
