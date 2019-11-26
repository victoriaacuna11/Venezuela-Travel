import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HotelsService } from 'src/app/services/hotels.service';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/Models/roomService';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { Room } from 'src/app/Models/room';
// import undefined = require('firebase/empty-import');

@Component({
  selector: 'app-rooms-admin',
  templateUrl: './rooms-admin.component.html',
  styleUrls: ['./rooms-admin.component.scss']
})
export class RoomsAdminComponent implements OnInit {

  hotels: Hotel[];
  createStateFrom: FormGroup;
  loading: boolean;
  roomServices: RoomService[];
  selectedRoomServices: RoomService[];
  roomServiceError: boolean;
  
  constructor(private _builder: FormBuilder, private hotelSV: HotelsService,
    private route: Router, private RoomServicesSV: RoomServiceService) { }

  ngOnInit() {
    this.loading=false;
    this.getRoomServices();

    this.createStateFrom=this._builder.group({
      name:['', Validators.required],
      hotel: ['', Validators.required],
      capacity: ['', Validators.required],
      views: ['', Validators.required],
      price: ['', Validators.required],
      services: this.addServicesControls(),
      imgs: this._builder.array([this.addImgGroup()]),
      
    })
    
    this.getHotels();
  }

  getHotels(){
    this.hotelSV.getHotelsCollection().subscribe(
      res => (this.hotels = res.map(item =>
        {
          const hotel:Hotel = {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
          return hotel;
        }))
    )
  }

  addServicesControls(){
    const arr = this.roomServices.map(element =>{
      return this._builder.control(false);
    });
      return this._builder.array(arr);
  }

  get servicesArray(): FormArray{
    return this.createStateFrom.get('services') as FormArray;
  }

  addImgGroup(){
    return this._builder.group({
      imgPath:['', Validators.required ],
    })
  }

  addImg(){
    this.imgsArray.push(this.addImgGroup());
  }

  removeImg(index){
    this.imgsArray.removeAt(index);
  }

  get imgsArray(): FormArray{
    return this.createStateFrom.get('imgs') as FormArray;
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

  getRoomServices(){
    this.roomServices=this.RoomServicesSV.getFacilities();
  }

  getSelectedRoomServices(){
    this.selectedRoomServices = [];
    this.servicesArray.controls.forEach((control, i) => {
      if (control.value){
        this.selectedRoomServices.push(this.roomServices[i]);
      }
    }
    )
    this.roomServiceError = this.selectedRoomServices.length > 0 ? false : true;
  }

  addPost(){
    const mov: Room  = {
      name: this.createStateFrom.value.name,
      imgs: this.createStateFrom.value.imgs,
      capacity: this.createStateFrom.value.capacity,
      views: this.createStateFrom.value.views,
      price: this.createStateFrom.value.price,
      hotel: this.createStateFrom.value.hotel,
      services: this.selectedRoomServices,
      available: true,
    }
    // console.log(this.selectedHotelFacilities.values);
    this.RoomServicesSV.addRoom(mov);
    // this.route.navigate(['/stateList']);
  }

}
