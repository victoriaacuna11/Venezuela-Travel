import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {TouristDestinationsService} from '../../../services/tourist-destinations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationInterface } from 'src/app/Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { SourceListMap } from 'source-list-map';

@Component({
  selector: 'app-t-destinations-admin',
  templateUrl: './t-destinations-admin.component.html',
  styleUrls: ['./t-destinations-admin.component.scss']
})
export class TDestinationsAdminComponent implements OnInit {

  createTDestinationsForm: FormGroup;
  constructor(private _builder: FormBuilder, private _td: TouristDestinationsService, 
    private _destination: DestinationsService, private route: Router, private routeSV: ActivatedRoute,
    private _states: StatesService) { }
  destinations: DestinationInterface[]=[];
  states: StateInterface[]=[];
  TD: TouristDestination[]=[];
  TDAvailable: string[]=[];
  // loadingStates:boolean=false;
  // loadingDestinations:boolean=false;
  // loadingTD:boolean=false;

  ngOnInit() {
    // this.loadingStates=true;
    // this.loadingDestinations=true;
    // this.loadingTD=true;
    this.createTDestinationsForm = this._builder.group({
      name:['', Validators.required],
      description: ['', Validators.required],
      destinationsCategory: ['', Validators.required],
      services: ['', Validators.required],
      activities: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      state: ['', Validators.required],
      direction: ['', Validators.required],
      city: ['', Validators.required],
      bannerImg: ['', Validators.required],
    })

    this.getDestinations();
    this.getStates();
    console.log(this.states.length);
    // this.getTD();
    // this.getEveryTDAvailable(this.states);
  }

  addPost(){
    const d = {
      name:this.createTDestinationsForm.value.name,
      description: this.createTDestinationsForm.value.description,
      destinationsCategory: this.createTDestinationsForm.value.destinationsCategory,
      services: this.createTDestinationsForm.value.services,
      activities: this.createTDestinationsForm.value.activities,
      latitude: this.createTDestinationsForm.value.latitude,
      longitude: this.createTDestinationsForm.value.longitude,
      state: this.createTDestinationsForm.value.state,
      direction: this.createTDestinationsForm.value.direction,
      city: this.createTDestinationsForm.value.city,
      bannerImg: this.createTDestinationsForm.value.bannerImg,
      available:true,
    }

    this._td.addTDestination(d);
    this.route.navigate(['/TDList']);
  }

  getDestinations(){
    this._destination  
    .getDestinationsCollection().
     subscribe(
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
          return destination;
        }))
    )
  }

  getStates(){
    this._states
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
          destination: item.payload.doc.get('destinationName'),
          touristDestinations: item.payload.doc.get('touristDestinations'),
          bannerImg: item.payload.doc.get('bannerImg'),
          available: item.payload.doc.get('available')
        }
        return state;
      })
    ));
  } 
  // getTD(){
  //   this._td.getTDestinationCollection()
  //   .subscribe( x => (this.TD = x.map(item => 
  //     {
  //       const destination: TouristDestination = {
  //         id: item.payload.doc.id,
  //         name: item.payload.doc.get('name'),
  //         description: item.payload.doc.get('description'),
  //         destinationsCategory: item.payload.doc.get('destinationsCategory'),
  //         services: item.payload.doc.get('services'),
  //         activities: item.payload.doc.get('activities'),
  //         latitude: item.payload.doc.get('latitude'),
  //         longitude: item.payload.doc.get('longitude'),
  //         state: item.payload.doc.get('state'),
  //         direction: item.payload.doc.get('direction'),
  //         city: item.payload.doc.get('city'),
  //         bannerImg: item.payload.doc.get('bannerImg'),
  //         available: item.payload.doc.get('available'),
  //       }
  //       return destination;
  //     })

  //   ));
  // }

  // getEveryTDAvailable(states: StateInterface[]){
  //   let TDTemp: string[];
  //   console.log("States: " + states.length);
    // for (let i = 0; i < this.states.length; i++) {
    //   for (let j = 0; j < this.states[i].touristDestinations.length; j++) {
    //     TDTemp.push(this.states[i].touristDestinations[j]);
    //   }
    // }
    // for (let index = 0; index < TDTemp.length; index++) {
    //   console.log(TDTemp[index]);
    // }

    // let TDAvailable: string[];
    // for (let i = 0; i < TDTemp.length; i++) {
    //   let isAvailable = true;
    //   for (let j = 0; j < this.TD.length; j++) {
    //     if(TDTemp[i]===this.TD[j].name){
    //       isAvailable=false;
    //     }
    //   }
    //   if(isAvailable){
    //     TDAvailable.push(TDTemp[i]);
    //   }
    // }
    
    // return TDAvailable;
  // }

}
