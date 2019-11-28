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
    private _destination: DestinationsService, private route: Router, private actRoute: ActivatedRoute,
    private _states: StatesService) { }

  destinations: DestinationInterface[]=[];
  states: StateInterface[]=[];
  TD: TouristDestination[]=[];
  TDAvailable: string[]=[];
  isModify = false;
  tDest: TouristDestination;

  loadingStates:boolean;
  loadingDestinations:boolean;

  ngOnInit() {
    this.loadingStates=true;
    this.loadingDestinations=true;
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


    if (this.actRoute.snapshot.paramMap.get('id') == undefined) {
  
      this.getDestinations();
      this.getStates();
      console.log(this.states.length);

    }else{
      this.getDestinations();
      this.getStates();
      this.isModify = true;
      const id = this.actRoute.snapshot.paramMap.get('id');
      this._td.getTDestinationById(id).subscribe(a => {
        const m: TouristDestination = {
          id: a.payload.id,
          ...a.payload.data(),
        }

        this.tDest = m;

        this.createTDestinationsForm.patchValue({
          name:this.tDest.name,
          description: this.tDest.description,
          destinationsCategory: this.tDest.destinationsCategory,
          services: this.tDest.services,
          activities: this.tDest.activities,
          latitude: this.tDest.latitude,
          longitude: this.tDest.longitude,
          state: this.tDest.state,
          direction: this.tDest.direction,
          city: this.tDest.city,
          bannerImg: this.tDest.bannerImg,
        })

        


        })
      
    }

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
            ...item.payload.doc.data(),
          }
          this.loadingDestinations=false;
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
          ...item.payload.doc.data()
        }
        this.loadingStates=false;
        return state;
      })
    ));
  }
  
  updateP(){

    this.tDest.name=this.createTDestinationsForm.value.name;
    this.tDest.description= this.createTDestinationsForm.value.description;
    this.tDest.destinationsCategory= this.createTDestinationsForm.value.destinationsCategory;
    this.tDest.services= this.createTDestinationsForm.value.services;
    this.tDest.activities= this.createTDestinationsForm.value.activities;
    this.tDest.latitude= this.createTDestinationsForm.value.latitude;
    this.tDest.longitude= this.createTDestinationsForm.value.longitude;
    this.tDest.state= this.createTDestinationsForm.value.state;
    this.tDest.direction= this.createTDestinationsForm.value.direction;
    this.tDest.city= this.createTDestinationsForm.value.city;
    this.tDest.bannerImg= this.createTDestinationsForm.value.bannerImg;
    this.tDest.available=this.tDest.available;

    this._td.updateP(this.tDest);
    this.route.navigate(['/TDList']);



  }

}
