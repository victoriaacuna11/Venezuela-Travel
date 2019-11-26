import { Component, OnInit } from '@angular/core';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { DestinationInterface } from 'src/app/Models/destination';
import { StateInterface } from 'src/app/Models/state';

@Component({
  selector: 'app-tourist-destination',
  templateUrl: './tourist-destination.component.html',
  styleUrls: ['./tourist-destination.component.scss']
})
export class TouristDestinationComponent implements OnInit {
  destination: TouristDestination;
  dest: DestinationInterface;
  sta: StateInterface;
  loading: boolean = false;
  loading2: boolean = false;

  constructor(private destinationSV: TouristDestinationsService, private route: ActivatedRoute, private _d: DestinationsService) { }

  ngOnInit() {
    this.loading = true;
    this.loading2 = true;
    this.getTD();
    //this.getD();


    //this.destination=this.destinationSV.getDestination();

  }

  getTD() {

    const id = this.route.snapshot.paramMap.get('id');
    this.destinationSV.getTDestinationById(id).subscribe(e => {
      const m: TouristDestination = {
        id: e.payload.id,
        name: e.payload.get("name"),
        description: e.payload.get("description"),
        destinationsCategory: e.payload.get("destinationsCategory"),
        services: e.payload.get("services"),
        activities: e.payload.get("activities"),
        latitude: e.payload.get("latitude"),
        longitude: e.payload.get("longitude"),
        state: e.payload.get("state"),
        direction: e.payload.get("direction"),
        city: e.payload.get("city"),
        bannerImg: e.payload.get("bannerImg"),
      }

      this.destination = m;
      this.loading2 = false;
    }
    )
  }

  getD() {
    this._d.getDestinationById(this.destination.destinationsCategory).subscribe(e => {

      const m: DestinationInterface = {
        available: e.payload.get("available"),
        name: e.payload.get("name"),
        bannerImg: e.payload.get("bannerImg"),
        views: e.payload.get("views"),
        visits: e.payload.get("visits"),
        id: e.payload.id,
      }

      this.dest = m;
      this.loading = false;
      console.log(m);


    });
  }

}
