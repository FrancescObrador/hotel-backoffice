export interface HotelFeature {
    id:          number;
    name:        string;
    description: string;
}

export interface HotelFeaturesResponse {
    count:  number;
    results: HotelFeature[];
}
