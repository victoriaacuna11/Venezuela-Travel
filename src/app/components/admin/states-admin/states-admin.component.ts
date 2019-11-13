import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-states-admin',
  templateUrl: './states-admin.component.html',
  styleUrls: ['./states-admin.component.scss']
})
export class StatesAdminComponent implements OnInit {

  // name:string;
  // bannerImg: string;
  // destination: string;
  // touristDestinations: string[];
  // imgs: string[];
  // gastronomy: string;
  // culture: string;
  // recreativeActs: string;
  // mainHotels: string;

  createStateFrom: FormGroup;

  constructor(private _builder: FormBuilder) { 
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

  ngOnInit() {
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
    if(this.createStateFrom.valid){
      console.log(this.createStateFrom.value);
    } else {
      console.log('ERROR');
    }
    
  }

}
