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
          ...item.payload.doc.data(),
        }
        return destination;
      })

    ));
  }

  deleteDestinations(id){
    this._td.deleteTDestination(id);
  }

}
