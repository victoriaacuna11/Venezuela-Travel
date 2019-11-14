import { Component, OnInit } from '@angular/core';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.scss']
})
export class ListStatesComponent implements OnInit {

  states: StateInterface[];
  

  constructor(private stateSV: StatesService) { }

  ngOnInit() {
    this.getStates();
  }

  getStates(){
    this.stateSV
    .getStatesCollection()
    .subscribe(res =>(this.states = res.map(item => 
      {
        const state: StateInterface = {
          id: item.payload.doc.id,
          name: item.payload.doc.get('name'),
          imgs: item.payload.doc.get('imgs'),
          gastronomy: item.payload.doc.get('gastronomy'),
          culture: item.payload.doc.get('culture'),
          recreativeActs: item.payload.doc.get('recreativeActs'),
          mainHotels: item.payload.doc.get('mainHotels'),
          views: item.payload.doc.get('views'),
          visits: item.payload.doc.get('visits'),
          destinationName: item.payload.doc.get('destinationName'),
          touristDestinations: item.payload.doc.get('touristDestinations'),
          bannerImg: item.payload.doc.get('bannerImg'),
        }
        return state;
      })
    ));
  } 

  deleteState(id){
    this.stateSV.deleteState(id);
  }
}
