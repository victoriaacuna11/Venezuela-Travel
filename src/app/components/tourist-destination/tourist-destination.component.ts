import { Component, OnInit } from '@angular/core';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tourist-destination',
  templateUrl: './tourist-destination.component.html',
  styleUrls: ['./tourist-destination.component.scss']
})
export class TouristDestinationComponent implements OnInit {
  destination: TouristDestination;

  constructor(private destinationSV: TouristDestinationsService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.destination=this.destinationSV.getDestination();
    this.getTD();
    
  }

  getTD(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.destination= this.destinationSV.getTDestinationById(id);
  }
}
