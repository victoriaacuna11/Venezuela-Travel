import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { StatesService } from '../../../services/states.service';
import { StateInterface } from 'src/app/Models/state';
import { Router } from '@angular/router';
import { DestinationInterface } from 'src/app/Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';
<<<<<<< HEAD
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';

=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> wil-routes


@Component({
  selector: 'app-states-admin',
  templateUrl: './states-admin.component.html',
  styleUrls: ['./states-admin.component.scss']
})
export class StatesAdminComponent implements OnInit {

  destinations: DestinationInterface[];
  states: StateInterface[];
<<<<<<< HEAD
  TD: TouristDestination[];
=======
  isModify = false;
  s: StateInterface;
>>>>>>> wil-routes

  createStateFrom: FormGroup;

  constructor(private _builder: FormBuilder, private stateSV: StatesService, private route: Router,
<<<<<<< HEAD
    private destinationSV: DestinationsService, private _td: TouristDestinationsService) { 
=======
    private destinationSV: DestinationsService, private actRoute: ActivatedRoute) {
>>>>>>> wil-routes

  }

  ngOnInit() {
<<<<<<< HEAD
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
    this.getDestinations();
    this.getTD();
  }
=======
    if (this.actRoute.snapshot.paramMap.get('id') == undefined) {

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
      this.getDestinations();
    } else {

      this.isModify = true;
      const id = this.actRoute.snapshot.paramMap.get('id');
      this.stateSV.getStateById(id).subscribe(a => {
        const m: StateInterface = {
          id: a.payload.id,
          name: a.payload.get("name"),
          bannerImg: a.payload.get("bannerImg"),
          imgs: a.payload.get(""),
          gastronomy: a.payload.get(""),
          culture: a.payload.get(""),
          recreativeActs: a.payload.get(""),
          mainHotels: a.payload.get(""),
          views: a.payload.get(""),
          visits: a.payload.get(""),
          destination: a.payload.get(""),
          touristDestinations: a.payload.get(""),
        }
      });

>>>>>>> wil-routes

    }
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
      views:0,
      visits:0,
    }

    this.stateSV.addState(mov);
    this.route.navigate(['/stateList']);
  }

  getDestinations() {
    this.destinationSV.getDestinationsCollection().subscribe(
<<<<<<< HEAD
      res => (this.destinations = res.map(item =>
        {
          const destination: DestinationInterface = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          return destination;
        }))
=======
      res => (this.destinations = res.map(item => {
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
>>>>>>> wil-routes
    )
  }

  getTD(){
    this._td.getTDestinationCollection()
    .subscribe( x => (this.TD = x.map(item => 
      {
        const destination: TouristDestination = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        return destination;
      })

    ));
  }
}


