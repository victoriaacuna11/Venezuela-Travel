import { StateInterface } from './state';
import {Room} from './room';
import { HotelFacilitie } from './hotelFacilitie';
import {FullDay} from './fullDay';

export class Hotel{
    
    name: string;
    description: string;
    imgPrin: string;
    bannerImg:string;
    id?: string;
    stars: number;
    latitude: number;
    longitude: number;
    direction: string;
    state: string;
    imgs: string[];
    city: string;
    fullday:FullDay;
    services: HotelFacilitie[];
    available: boolean;
    //FILTROS PREESTABLECIDOS.
    nrBusquedas: number;
    nrVentas: number;


}
