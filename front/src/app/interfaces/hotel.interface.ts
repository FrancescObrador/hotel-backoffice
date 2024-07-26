import { HotelFeature } from "./hotel-feature.interface";
import { HotelMedia } from "./hotel-media.interface";

export interface Hotel {
    id:       number;
    name:     string;
    address:  string;
    phone:    string;
    email:    string;
    stars:    number;
    features: HotelFeature[];
    media:    HotelMedia[];
}

export interface HotelsResponse {
    count:  number;
    results: Hotel[];
}

export interface HotelsPaginationBody{
    page: number;
    limit: number;
}