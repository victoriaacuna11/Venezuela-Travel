import { Component, OnInit } from '@angular/core';
import { StateInterface } from 'src/app/Models/state';
import { DestinationInterface } from 'src/app/Models/destination';
import { FormGroup, FormBuilder, Validators, FormArray, ControlContainer } from '@angular/forms';
import { DestinationsService } from 'src/app/services/destinations.service';
import { StatesService } from 'src/app/services/states.service';
import { Router } from '@angular/router';
import { HotelFacilitiesService } from 'src/app/services/hotel-facilities.service';
import { HotelFacilitie } from 'src/app/Models/hotelFacilitie';
import { HotelsService } from 'src/app/services/hotels.service';
import { FullDay } from 'src/app/Models/fullDay';
import { Hotel } from 'src/app/Models/hotel';

@Component({
  selector: 'app-hotels-admin',
  templateUrl: './hotels-admin.component.html',
  styleUrls: ['./hotels-admin.component.scss']
})
export class HotelsAdminComponent implements OnInit {

  destinations: DestinationInterface[];
  states: StateInterface[];
  createStateFrom: FormGroup;
  createRoomForm : FormGroup;
  hotel:any;
  hotelFacilities: HotelFacilitie[];
  selectedHotelFacilities: HotelFacilitie[];
  hotelFacilitiesError: boolean = true;
  hasFullDay: boolean = false;
  fullDay:FullDay ={
    available:true,
    price:0
  }

  constructor(private _builder: FormBuilder, private stateSV: StatesService, private route: Router,
    private destinationSV: DestinationsService, private hotelFacilitiesSV: HotelFacilitiesService,
    private hotelSV:HotelsService) {
      
     }

  ngOnInit() {
    this.getDestinations();
    this.getStates();
    this.getHotelFacilities();
    this.createStateFrom=this._builder.group({
      name:['', Validators.required],
      bannerImg: ['', Validators.required],
      description: ['', Validators.required],
      imgs: this._builder.array([this.addImgGroup()]),
      imgPrin: ['', Validators.required],
      stars: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      direction: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      services: this.addServicesControls(),
      fullDayPrice: [''],
    });
  }


  addServicesControls(){
    const arr = this.hotelFacilities.map(element =>{
      return this._builder.control(false);
    }
      )
      return this._builder.array(arr);
    }
  

  addImgGroup(){
    return this._builder.group({
      imgPath:['', Validators.required ],
    })
  }

  
  get imgsArray(): FormArray{
    return this.createStateFrom.get('imgs') as FormArray;
  }
  get servicesArray(): FormArray{
    return this.createStateFrom.get('services') as FormArray;
  }



  addImg(){
    this.imgsArray.push(this.addImgGroup());
  }

  removeImg(index){
    this.imgsArray.removeAt(index);
  }

  getDestinations(){
    this.destinationSV.getDestinationsCollection().subscribe(
      res => (this.destinations = res.map(item =>
        {
          const destination: DestinationInterface = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          return destination;
        }))
    )
  }
  getStates(){
    this.stateSV
    .getStatesCollection()
    .subscribe(res =>(this.states = res.map(item => 
      {
        const state: StateInterface = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        return state;
      })
    ));
  } 
  
  getHotelFacilities(){
    this.hotelFacilities=this.hotelFacilitiesSV.getFacilities();
  }

  getSelectedHotelFacilities(){
    this.selectedHotelFacilities = [];
    this.servicesArray.controls.forEach((control, i) => {
      if (control.value){
        this.selectedHotelFacilities.push(this.hotelFacilities[i]);
      }
    }
    )
    this.hotelFacilitiesError = this.selectedHotelFacilities.length > 0 ? false : true;
  }

  checkboxServiceTouched(){
    let flg = false;
    this.servicesArray.controls.forEach(control =>{
      if(control.touched){
        flg=true;
      }
    }
      )
    return flg;
  }

  addPost(){
    const mov:Hotel  = {
      name: this.createStateFrom.value.name,
      bannerImg: this.createStateFrom.value.bannerImg,
      description: this.createStateFrom.value.description,
      imgPrin: this.createStateFrom.value.imgPrin,
      imgs: this.createStateFrom.value.imgs,
      stars: this.createStateFrom.value.stars,
      latitude: this.createStateFrom.value.latitude,
      longitude: this.createStateFrom.value.longitude,
      direction: this.createStateFrom.value.direction,
      state: this.createStateFrom.value.state,
      city: this.createStateFrom.value.city,
      services: this.selectedHotelFacilities,
      fullday: this.fullDay,
      nrBusquedas: 0,
      nrVentas: 0,
      available: true,
    }
    // console.log(this.selectedHotelFacilities.values);
    this.hotelSV.addHotel(mov);
    this.route.navigate(['/admin/room/add']);
  }

  // addHotelInfo(){
  //   this.hotel={
  //     name: this.createStateFrom.value.name,
  //     bannerImg: this.createStateFrom.value.bannerImg,
  //     description: this.createStateFrom.value.description,
  //     imgPrin: this.createStateFrom.value.imgPrin,
  //     imgs: this.createStateFrom.value.imgs,
  //     stars: this.createStateFrom.value.stars,
  //     latitude: this.createStateFrom.value.latitude,
  //     longitude: this.createStateFrom.value.longitude,
  //     direction: this.createStateFrom.value.direction,
  //     state: this.createStateFrom.value.state,
  //     city: this.createStateFrom.value.city,
  //     services: this.selectedHotelFacilities,
  //     fullday: this.fullDay,
  //     rooms: [""],
  //   }
  //   console.log(this.hotel.name);
  // }

  getHasFullDay(){
    this.hasFullDay=!this.hasFullDay;
  }

  addFullDay(){
    this.fullDay.price=this.createStateFrom.value.fullDayPrice;
    this.fullDay.available=true;
    console.log(this.fullDay.price);
  }

  deleteFullDay(){
    this.fullDay.price=0;
    this.fullDay.available=false;
    this.hasFullDay=false;
    console.log(this.fullDay.price);
  }

}