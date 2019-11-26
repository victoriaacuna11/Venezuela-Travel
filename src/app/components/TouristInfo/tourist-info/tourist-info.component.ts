import { Component, OnInit, Input } from '@angular/core';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tourist-info',
  templateUrl: './tourist-info.component.html',
  styleUrls: ['./tourist-info.component.scss']
})
export class TouristInfoComponent implements OnInit {

  // @Input() imgbanner?: string;
  // @Input() titlebanner?: string;
  state: StateInterface;
  loading:boolean=false;

  constructor(private stateSV: StatesService, private routeSV: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.loading=true;
    this.getState();
    // console.log(this.state.name);
    // this.state=this.stateSV.getState();
    // console.log(this.state.touristDestinations);
  }

  getState():void{
    const id = this.routeSV.snapshot.paramMap.get('id');
    this.stateSV.getStateById(id).subscribe(arr => {
      console.log(arr.payload.data());
      
      const sta:StateInterface={
        id: arr.payload.id,
        name: arr.payload.get('name'),
        destination: arr.payload.get('destination'),
        bannerImg: arr.payload.get('bannerImg'),
        imgs: arr.payload.get('imgs'),
        gastronomy: arr.payload.get('gastronomy'),
        culture: arr.payload.get('culture'),
        recreativeActs: arr.payload.get('recreativeActs'),
        mainHotels: arr.payload.get('mainHotels'),
        views: arr.payload.get('views'),
        visits: arr.payload.get('visits'),
        touristDestinations: arr.payload.get('touristDestinations'),
        available: arr.payload.get('available'),
      }

      this.state=sta;

      this.loading=false;
    })
    // this.loading=false;
  }
}
