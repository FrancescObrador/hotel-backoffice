import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel, HotelsPaginationBody, HotelsResponse } from '../components/interfaces/hotel.interface';
import { Room } from '../components/interfaces/room.interface';
import { HotelFeature } from '../components/interfaces/hotel-feature.interface';
import { HotelMedia } from '../components/interfaces/hotel-media.interface';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private apiUrl = `http://localhost:3000/api/v1/hotels`;

  constructor(private http: HttpClient) {}

  getAllHotels(params: HotelsPaginationBody): Observable<HotelsResponse> {
    console.log(params)
    const httpParams = new HttpParams()
    .set('page', params.page)
    .set('limit', params.limit);

    console.log(httpParams)

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
  
  addFeatureToHotel(hotelId: number, feature: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addFeature`, { hotelId, ...feature });
  }

  addMediaToHotel(hotelId: number, media: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${hotelId}/media`, media);
  }

  removeHotelFeature(hotelId: number, featureId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/removeFeature/${hotelId}/${featureId}`);
  }

  deleteHotelMedia(hotelId: number, mediaId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${hotelId}/media/${mediaId}`);
  }
}
