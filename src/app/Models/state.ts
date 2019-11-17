import { Hotel } from './hotel';
import { TouristDestination } from './touristDestination';
import { DestinationInterface } from './destination';

export interface StateInterface{

    id?: string;
    name:string;
    bannerImg?: string;

    // NO VA
    hotels?: Hotel[];
    // ARREGLAR
    
    destinations?: DestinationInterface[];

    // touristDestinations?: TouristDestination[];
    imgs?: string[];
    gastronomy?: string;
    culture?: string;
    recreativeActs?: string;
    mainHotels?: string;
    views?: number;
    visits?: number;
    // 
    display?: boolean;
    destination: string;
    touristDestinations?: string[];
}

