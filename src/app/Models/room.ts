import { RoomService } from "./roomService";

export class Room{
    name:string;
    imgs:string[];
    capacity:number;
    services: RoomService[];
    views: string;
    price: number;
}