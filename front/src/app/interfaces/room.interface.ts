import { Hotel } from "./hotel.interface";
import { RoomType } from "./RoomType.interface";

export interface Room {
    id:       number;
    number:   number;
    hotel:    Hotel;
    roomType: RoomType;
}