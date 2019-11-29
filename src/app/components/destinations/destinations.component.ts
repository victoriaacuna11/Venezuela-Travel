import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationInterface } from '../../Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  destinations: DestinationInterface[];
  loadingDestinations:boolean;

  constructor(private router: Router, private destinationSV: DestinationsService,
    private routeSV: ActivatedRoute) { }

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
            name: item.payload.doc.get('name'),
            bannerImg: item.payload.doc.get('bannerImg'),
            views: item.payload.doc.get('views'),
            visits: item.payload.doc.get('visits'),
            available: item.payload.doc.get('available')
          }
          this.loadingDestinations=false;
          return destination;
        }))
    )
  }


}
