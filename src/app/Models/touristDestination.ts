import { DestinationInterface } from './destination';
import { StateInterface } from './state';

export class TouristDestination{
    id?:string;
    name:string;
    description?: string;
    destinationsCategory?:DestinationInterface;
    services?:string;
    activities?:string;
    latitude?:number;
    longitude?:number;
    state?: StateInterface;
    direction?:string;
    city?:string;
    bannerImg?: string;

}