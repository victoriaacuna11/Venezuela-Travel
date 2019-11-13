import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {StatesService} from '../../../services/states.service';
import { StateInterface } from 'src/app/Models/state';
import { Router } from '@angular/router';



@Component({
  selector: 'app-states-admin',
  templateUrl: './states-admin.component.html',
  styleUrls: ['./states-admin.component.scss']
})
export class StatesAdminComponent implements OnInit {


  states: StateInterface[]

  createStateFrom: FormGroup;

  constructor(private _builder: FormBuilder, private stateSV: StatesService, private route: Router) { 

  }

  ngOnInit() {
    this.createStateFrom=this._builder.group({
      name:['', Validators.required],
      bannerImg: ['', Validators.required],
      destination: ['', Validators.required],
      touristDestinations: this._builder.array([this.addTouristDestinationsGroup()]),
      imgs: this._builder.array([this.addImgGroup()]),
      gastronomy: ['', Validators.required],
      culture: ['', Validators.required],
      recreativeActs: ['', Validators.required],
      mainHotels: ['', Validators.required],
    })
  }

  addTouristDestinationsGroup(){
    return this._builder.group({
      name:['', Validators.required],
    })
  }

  addImgGroup(){
    return this._builder.group({
      imgPath:['', Validators.required ],
    })
  }

  get touristDestinationsArray(): FormArray{
    return this.createStateFrom.get('touristDestinations') as FormArray;
  }

  get imgsArray(): FormArray{
    return this.createStateFrom.get('imgs') as FormArray;
  }

  addImg(){
    this.imgsArray.push(this.addImgGroup());
  }

  addTouristDestination(){
    this.touristDestinationsArray.push(this.addTouristDestinationsGroup())
  }

  removeImg(index){
    this.imgsArray.removeAt(index);
  }

  removeTouristDestination(index){
    this.touristDestinationsArray.removeAt(index);
  }

  addPost(){
    const mov = {
      name: this.createStateFrom.value.name,
      bannerImg: this.createStateFrom.value.bannerImg,
      destination: this.createStateFrom.value.destination,
      touristDestinations: this.createStateFrom.value.touristDestinations,
      imgs: this.createStateFrom.value.imgs,
      gastronomy: this.createStateFrom.value.gastronomy,
      culture: this.createStateFrom.value.culture,
      recreativeActs: this.createStateFrom.value.recreativeActs,
      mainHotels: this.createStateFrom.value.mainHotels,
    }
    
    this.stateSV.addState(mov);
    this.route.navigate(['/stateList']);
  }

}
