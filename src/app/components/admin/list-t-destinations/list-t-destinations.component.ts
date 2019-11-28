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
  destination: TouristDestination;

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

  setEnabled(id){
    let found=false;
    let cont=0;
    while(!found && cont<this.destinations.length){
      if(this.destinations[cont].id===id){
        found=true;
        this.destinations[cont].available=!this.destinations[cont].available;
        this.destination = this.destinations[cont];
      }
      cont=cont+1;
    }
    console.log(this.destination);
    this._td.updateP(this.destination);
  }
}
