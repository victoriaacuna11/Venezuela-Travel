import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {TouristDestinationsService} from '../../../services/tourist-destinations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-destinations-admin',
  templateUrl: './t-destinations-admin.component.html',
  styleUrls: ['./t-destinations-admin.component.scss']
})
export class TDestinationsAdminComponent implements OnInit {

  createTDestinationsForm: FormGroup;
  constructor(private _builder: FormBuilder, private _td: TouristDestinationsService, private route: Router) { }

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
    //this.route.navigate(['/stateList']);
  }

}
