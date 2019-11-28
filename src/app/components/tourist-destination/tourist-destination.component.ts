import { Component, OnInit } from '@angular/core';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';
import { ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { DestinationInterface } from 'src/app/Models/destination';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-tourist-destination',
  templateUrl: './tourist-destination.component.html',
  styleUrls: ['./tourist-destination.component.scss']
})
export class TouristDestinationComponent implements OnInit {
  destination: TouristDestination;
  dest: DestinationInterface;
  sta: StateInterface;
  loading2: boolean = false;

  constructor(private _s: StatesService, private destinationSV: TouristDestinationsService, private route: ActivatedRoute, private _d: DestinationsService) { }

  ngOnInit() {
    this.getTD();
  }

  getTD() {

    const id = this.route.snapshot.paramMap.get('id');
    this.loading2=true;
    this.destinationSV.getTDestinationById(id).subscribe(e => {
      const m: TouristDestination = {
        id: e.payload.id,
        ...e.payload.data()
      }

      this.destination = m;
      this.loading2 = false;
      this.getD();
      this.getS();
    })
  }

  getD() {
    this._d.getDestinationById(this.destination.destinationsCategory).subscribe(e => {

      const m: DestinationInterface = {
        id: e.payload.id,
        ...e.payload.data(),
      }

      this.dest = m;

    });
  }

  getS(){
    this._s.getStateById(this.destination.state).subscribe(e => {

      const n: StateInterface = {
        id: e.payload.id,
        ...e.payload.data(),
      }

      this.sta = n;

    });
  }

}
