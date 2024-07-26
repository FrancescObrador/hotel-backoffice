import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel, HotelsPaginationBody, HotelsResponse } from '../interfaces/hotel.interface';
import { Room } from '../interfaces/room.interface';
import { HotelFeature } from '../interfaces/hotel-feature.interface';
import { HotelMedia } from '../interfaces/hotel-media.interface';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = `http://localhost:3000/api/v1/hotels`;

  constructor(private http: HttpClient) {}

  getAllHotels(params: HotelsPaginationBody): Observable<HotelsResponse> {
    const httpParams = new HttpParams()
    .set('page', params.page)
    .set('limit', params.limit);

    return this.http.get<HotelsResponse>(this.apiUrl, { params: httpParams });
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.apiUrl}/${id}`);
  }

  getHotelRooms(id: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/${id}/rooms`);
  }

  getHotelFeatures(id: number): Observable<HotelFeature[]> {
    return this.http.get<HotelFeature[]>(`${this.apiUrl}/${id}/features`);
  }

  getHotelMedia(id: number): Observable<HotelMedia[]> {
    return this.http.get<HotelMedia[]>(`${this.apiUrl}/${id}/media`);
  }

  createHotel(hotel: Partial<Hotel>): Observable<any> {
    return this.http.post(this.apiUrl, hotel);
  }

  updateHotel(id: number, hotel: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, hotel);
  }

  deleteHotel(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  addFeatureToHotel(hotelId: number, featureId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addFeature`, { hotelId, featureId });
  }

  addMediaToHotel(hotelId: number, mediaUrl: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${hotelId}/media`, mediaUrl);
  }

  removeHotelFeature(hotelId: number, featureId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${hotelId}/removeFeature/${featureId}`);
  }

  deleteHotelMedia(hotelId: number, mediaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${hotelId}/removeMedia/${mediaId}`);
  }
}
