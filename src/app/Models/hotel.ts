import { StateInterface } from './state';
import {Room} from './room';
import { HotelFacilitie } from './hotelFacilitie';
import {FullDay} from './fullDay';

export class Hotel{
    name: string;
    description: string;
    imgPrin: string;

    // Estas imgs pueden ir dentro del objeto servicio.
    amenitiesImg?: String[];

    nrBusquedas: number;
    nrVentas: number;
    
    
    bannerImg?:string;
    id?: string;
    stars?:number;
    latitude?:number;
    longitude?:number;
    direction?:string;
    state?: StateInterface;
    imgs?: string[];
    city?: string;
    fullday?:FullDay;
    services?: HotelFacilitie[];
    rooms?: Room[];
}
