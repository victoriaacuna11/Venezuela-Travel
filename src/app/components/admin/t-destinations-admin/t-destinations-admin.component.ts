import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {TouristDestinationsService} from '../../../services/tourist-destinations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationInterface } from 'src/app/Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';

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
  destinations: DestinationInterface[];
  states: StateInterface[];

  ngOnInit() {
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
            visits: item.payload.doc.get('visits')
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
          destination: item.payload.doc.get('destination'),
          touristDestinations: item.payload.doc.get('touristDestinations'),
          bannerImg: item.payload.doc.get('bannerImg'),
        }
        return state;
      })
    ));
  } 

}
