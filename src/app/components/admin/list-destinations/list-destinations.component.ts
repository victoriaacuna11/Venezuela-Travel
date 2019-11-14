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

  constructor(private destinationSV: DestinationsService) { }

  ngOnInit() {
    this.getDestinations();
    
  }

  getDestinations(){
    this.destinationSV.getDestinationsCollection().subscribe(
      res => (this.destinations = res.map(item =>
        {
          const destination: DestinationInterface = {
            id: item.payload.doc.id,
            name: item.payload.doc.get('name'),
            bannerImg: item.payload.doc.get('bannerImg'),
            views: item.payload.doc.get('views'),
            visits: item.payload.doc.get('visits')
          }
          return destination;
        }))
    )
  }

  deleteDestination(id){
    this.destinationSV.deleteDestination(id);
  }
}
