export interface Booking {
    id:           number;
    checkInDate:  Date;
    checkOutDate: Date;
    rooms:        Room[];
}

export interface Room {
    id:     number;
    number: number;
}
