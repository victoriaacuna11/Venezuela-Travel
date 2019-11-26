import { RoomService } from "./roomService";

export class Room{
    id?:string;
    name: string;
    imgs: string[];
    capacity:number;
    hotel: string;
    services: RoomService[];
    views: string;
    price: number;
    available: boolean;
}