import { Hotel } from './hotel';
import { TouristDestination } from './touristDestination';
import { DestinationInterface } from './destination';

export interface StateInterface{

    id?: string;
    available: boolean;
    name:string;
    bannerImg: string;
    imgs: string[];
    gastronomy: string;
    culture: string;
    recreativeActs: string;
    mainHotels: string;
    destination: string;
    touristDestinations: string[];

    // FILTROS PREESTABLECIDOS: 
    views: number;
    visits: number;
}

