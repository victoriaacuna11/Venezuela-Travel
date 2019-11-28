import { Component, OnInit } from '@angular/core';
import { DestinationInterface } from 'src/app/Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-list-destinations',
  templateUrl: './list-destinations.component.html',
  styleUrls: ['./list-destinations.component.scss']
})
export class ListDestinationsComponent implements OnInit {

  destinations: DestinationInterface[];
  destination: DestinationInterface;
  loadingDestinations: boolean;

  constructor(private destinationSV: DestinationsService) { }

  ngOnInit() {
    this.loadingDestinations=true;
    this.getDestinations();
    
  }

  getDestinations(){
    this.destinationSV.getDestinationsCollection().subscribe(
      res => (this.destinations = res.map(item =>
        {
          const destination: DestinationInterface = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          this.loadingDestinations=false;
          return destination;
        }))
    )
  }

  deleteDestination(id){
    this.destinationSV.deleteDestination(id);
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
    this.destinationSV.updateDest(this.destination);
  }

}
