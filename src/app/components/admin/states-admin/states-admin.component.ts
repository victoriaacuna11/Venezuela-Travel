import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { StatesService } from '../../../services/states.service';
import { StateInterface } from 'src/app/Models/state';
import { Router } from '@angular/router';
import { DestinationInterface } from 'src/app/Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-states-admin',
  templateUrl: './states-admin.component.html',
  styleUrls: ['./states-admin.component.scss']
})
export class StatesAdminComponent implements OnInit {

  destinations: DestinationInterface[];
  states: StateInterface[];
  TD: TouristDestination[];
  isModify = false;
  s: StateInterface;
  loading2: boolean = false;

  createStateFrom: FormGroup;

  constructor(private _builder: FormBuilder, private stateSV: StatesService, private route: Router,
    private destinationSV: DestinationsService, private _td: TouristDestinationsService,
    private actRoute: ActivatedRoute) {

  }

  ngOnInit() {

    this.createStateFrom = this._builder.group({
      name: ['', Validators.required],
      bannerImg: ['', Validators.required],
      destination: ['', Validators.required],
      touristDestinations: this._builder.array([this.addTouristDestinationsGroup()]),
      imgs: this._builder.array([this.addImgGroup()]),
      gastronomy: ['', Validators.required],
      culture: ['', Validators.required],
      recreativeActs: ['', Validators.required],
      mainHotels: ['', Validators.required],
    })

    if (this.actRoute.snapshot.paramMap.get('id') == undefined) {
      this.getDestinations();
      this.getTD();
      
    } else {
      this.getDestinations();
      this.getTD();
      this.isModify = true;
      const id = this.actRoute.snapshot.paramMap.get('id');
      /*this.s = this.stateSV.getStateById(id);*/
      this.stateSV.getStateById(id).subscribe(a => {
        const m: StateInterface = {
          id: a.payload.id,
          ...a.payload.data(),
        }

        this.s = m;

        this.createStateFrom.patchValue({
          name: this.s.name,
          bannerImg: this.s.bannerImg,
          destination: this.s.destination,
          gastronomy: this.s.gastronomy,
          culture: this.s.culture,
          recreativeActs: this.s.recreativeActs,
          mainHotels: this.s.mainHotels,
          // touristDestinations: this.s.touristDestinations,
        }) 

        this.createStateFrom.setControl('touristDestinations', this.setD(this.s.touristDestinations));
        this.createStateFrom.setControl('imgs', this.setImgs(this.s.imgs));
        
    });


  }
}

setD(destSets: any[]): FormArray{
  const formArray = new FormArray([]);
  destSets.forEach(s => {
    formArray.push(
      this._builder.group({
        name: s.name,
        
      })
    );
  })

  return formArray;

}

setImgs(imgSets: any[]): FormArray{
  const formArray = new FormArray([]);
  imgSets.forEach(s => {
    formArray.push(
      this._builder.group({
        imgPath: s.imgPath,
      })
    );
  })

  return formArray;
}

addTouristDestinationsGroup() {
  return this._builder.group({
    name: ['', Validators.required],
  })
}

addImgGroup() {
  return this._builder.group({
    imgPath: ['', Validators.required],
  })
}

get touristDestinationsArray(): FormArray {
  return this.createStateFrom.get('touristDestinations') as FormArray;
}

get imgsArray(): FormArray {
  return this.createStateFrom.get('imgs') as FormArray;
}

addImg() {
  this.imgsArray.push(this.addImgGroup());
}

addTouristDestination() {
  this.touristDestinationsArray.push(this.addTouristDestinationsGroup())
}

removeImg(index) {
  this.imgsArray.removeAt(index);
}

removeTouristDestination(index) {
  this.touristDestinationsArray.removeAt(index);
}

addPost() {
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
    available: true,
    views: 0,
    visits: 0,
  }

  this.stateSV.addState(mov);
  this.route.navigate(['/stateList']);
}

getDestinations() {
  this.destinationSV.getDestinationsCollection().subscribe(
    res => (this.destinations = res.map(item => {
      const destination: DestinationInterface = {
        id: item.payload.doc.id,
        ...item.payload.doc.data(),
      }
      return destination;
    }))
  )
}

getTD(){
  this._td.getTDestinationCollection()
    .subscribe(x => (this.TD = x.map(item => {
      const destination: TouristDestination = {
        id: item.payload.doc.id,
        ...item.payload.doc.data(),
      }
      return destination;
    })

    ));
}

updateS(){

  this.s.name= this.createStateFrom.value.name;
  this.s.bannerImg= this.createStateFrom.value.bannerImg;
  this.s.destination= this.createStateFrom.value.destination;
  this.s.touristDestinations= this.createStateFrom.value.touristDestinations;
  this.s.imgs= this.createStateFrom.value.imgs;
  this.s.gastronomy= this.createStateFrom.value.gastronomy;
  this.s.culture= this.createStateFrom.value.culture;
  this.s.recreativeActs= this.createStateFrom.value.recreativeActs;
  this.s.mainHotels= this.createStateFrom.value.mainHotels;
  this.s.available= true;
  this.s.views= this.s.views;
  this.s.visits= this.s.visits;

  this.stateSV.updateS(this.s);
  this.route.navigate(['/stateList']);


}



}


