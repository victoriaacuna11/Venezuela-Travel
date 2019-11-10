import { Component, OnInit } from '@angular/core';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';

@Component({
  selector: 'app-tourist-destination',
  templateUrl: './tourist-destination.component.html',
  styleUrls: ['./tourist-destination.component.scss']
})
export class TouristDestinationComponent implements OnInit {
  destination: TouristDestination;

  constructor(private destinationSV: TouristDestinationsService) { }

  ngOnInit() {
    this.destination=this.destinationSV.getDestination();
  }

}
