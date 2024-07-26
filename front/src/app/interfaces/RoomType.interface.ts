
export interface RoomType {
    id:          number;
    name:        string;
    description: string;
    capacity:    number;
    basePrice:   string;
    features:    RoomFeature[];
    media:       RoomMedia[];
}

export interface RoomFeature {
    id:          number;
    name:        string;
    description: string;
}

export interface RoomMedia {
    id:  number;
    url: string;
}