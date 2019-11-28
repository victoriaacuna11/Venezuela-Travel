import { Component, OnInit, Input } from '@angular/core';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';
import {ActivatedRoute} from '@angular/router';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';

@Component({
  selector: 'app-tourist-info',
  templateUrl: './tourist-info.component.html',
  styleUrls: ['./tourist-info.component.scss']
})
export class TouristInfoComponent implements OnInit {

  state: StateInterface;
  loadingState:boolean;
  loadingTouristDestiniations:boolean;
  touristDestinations: TouristDestination[];

  constructor(private stateSV: StatesService, private routeSV: ActivatedRoute, private TouristDestinationsSV: TouristDestinationsService) { 
    
  }

  ngOnInit() {
    this.loadingState=true;
    this.loadingTouristDestiniations=true;
    this.getState();
    this.getTouristDestinations();
  }

  getState():void{
    const id = this.routeSV.snapshot.paramMap.get('id');
    this.stateSV.getStateById(id).subscribe(arr => {
      const sta:StateInterface={
        id: arr.payload.id,
        ...arr.payload.data()
      }
      this.state=sta;
      this.loadingState=false;
    })
  }

  getTouristDestinations(){
    this.TouristDestinationsSV.getTDestinationCollection()
    .subscribe( x => (this.touristDestinations = x.map(item => 
      {
        const destination: TouristDestination = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        this.loadingTouristDestiniations=false;
        return destination;
      })

    ));
  }

}
