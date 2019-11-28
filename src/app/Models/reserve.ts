import { ReserveRoomInterface } from './reserveRoom';

export class ReserveInterface{

    id?:string
    available:boolean;
    arriveDate:string;
    leaveDate:string;
    hotel:string; //el id del hotel
    cost:number;
    numberOfPeople:number;
    rooms:ReserveRoomInterface[];
    tripPlan:string; //id del trip plan al que pertenece


}