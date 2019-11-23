import { Component, OnInit } from '@angular/core';
import {TouristDestinationsService} from '../../../services/tourist-destinations.service';
import { TouristDestination } from 'src/app/Models/touristDestination';

@Component({
  selector: 'app-list-t-destinations',
  templateUrl: './list-t-destinations.component.html',
  styleUrls: ['./list-t-destinations.component.scss']
})
export class ListTDestinationsComponent implements OnInit {

  destinations: TouristDestination[];

  constructor(private _td: TouristDestinationsService) { }

  ngOnInit() {
    this.getTD();
  }

  getTD(){
    this._td.getTDestinationCollection()
    .subscribe( x => (this.destinations = x.map(item => 
      {
        const destination: TouristDestination = {
          id: item.payload.doc.id,
          name: item.payload.doc.get('name'),
          description: item.payload.doc.get('description'),
          destinationsCategory: item.payload.doc.get('destinationsCategory'),
          services: item.payload.doc.get('services'),
          activities: item.payload.doc.get('activities'),
          latitude: item.payload.doc.get('latitude'),
          longitude: item.payload.doc.get('longitude'),
          state: item.payload.doc.get('state'),
          direction: item.payload.doc.get('direction'),
          city: item.payload.doc.get('city'),
          bannerImg: item.payload.doc.get('bannerImg'),
          available: item.payload.doc.get('available'),
        }
        return destination;
      })

    ));
  }

  deleteDestinations(id){
    this._td.deleteTDestination(id);
  }

}
