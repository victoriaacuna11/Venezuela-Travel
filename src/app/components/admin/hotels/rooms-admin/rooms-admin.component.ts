import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HotelsService } from 'src/app/services/hotels.service';
import { Router, ActivatedRoute } from '@angular/router';
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
  loadingRoomsServices: boolean;
  loadingHotels: boolean;
  loadingRoom:boolean;

  roomServices: RoomService[] = [];
  selectedRoomServices: RoomService[];
  roomServiceError: boolean;
  actualRoom:Room;
  isModify: boolean;
  
  constructor(private _builder: FormBuilder, private hotelSV: HotelsService,
    private route: Router, private RoomServicesSV: RoomServiceService, private ActRouter: ActivatedRoute) { }

  ngOnInit() {
    
    this.isModify = false;
    this.loadingRoomsServices=true;
    this.loadingHotels=true;
    this.loadingRoom=true;
    this.roomServices = [];
    // this.getRoomServices();
    // this.getHotels();

    this.createStateFrom=this._builder.group({
      name:['', Validators.required],
      hotel: ['', Validators.required],
      capacity: ['', Validators.required],
      views: ['', Validators.required],
      price: ['', Validators.required],
      services: this.addServicesControls(),
      imgs: this._builder.array([this.addImgGroup()]),
    })

    if(this.ActRouter.snapshot.paramMap.get('id')==undefined){
      this.getRoomServices();
      this.getHotels();
      this.loadingRoom=false;
    } else {
      this.getRoomServices();
      this.getHotels();
      this.isModify=true;
      const id = this.ActRouter.snapshot.paramMap.get('id');

      this.RoomServicesSV.getRoomById(id).subscribe(a => {
        const room: Room = {
          id: a.payload.id,
          ...a.payload.data(),
        }
        this.loadingRoom=false;
        this.actualRoom=room;
        this.fillCheckboxes(this.actualRoom.services, this.roomServices);
        this.createStateFrom.patchValue({
          name: this.actualRoom.name,
          hotel: this.actualRoom.hotel,
          capacity: this.actualRoom.capacity,
          views: this.actualRoom.views,
          price: this.actualRoom.price,
        })

        // this.createStateFrom.setControl('services', this.setServices(this.actualRoom.services));
        this.createStateFrom.setControl('imgs', this.setImgs(this.actualRoom.imgs));
      })
    }
  }

  fillCheckboxes(arrayRoom: RoomService[], fullArray: RoomService[]){

    for (let index1 = 0; index1 < arrayRoom.length; index1++) {

      let roomServ = arrayRoom[index1];

      for (let index2 = 0; index2 < fullArray.length; index2++) {

        let fullServ = fullArray[index2];
        
        if(fullServ.name == roomServ.name){
          fullServ.selected = true;
          console.log("iguales: " +roomServ.name + "|" + fullServ.name);
          break;
        }           
      } 
    }
  }

  getHotels(){
    this.hotelSV.getHotelsCollection().subscribe(
      res => (this.hotels = res.map(item =>
        {
          const hotel:Hotel = {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          };
          this.loadingHotels=false;
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
    for (let index = 0; index < this.roomServices.length; index++) {
     
      const element = this.roomServices[index];
      element.selected=false;
    }
    this.loadingRoomsServices=false;
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

  getSelectedServices(){
    let array = [];
    for (let index = 0; index < this.roomServices.length; index++) {
      const element = this.roomServices[index];
      if(element.selected){
        array.push(element);
      }    
    }
    return array;
  }

  addPost(){
    console.log("addPost")
    const mov: Room  = {
      name: this.createStateFrom.value.name,
      imgs: this.createStateFrom.value.imgs,
      capacity: this.createStateFrom.value.capacity,
      views: this.createStateFrom.value.views,
      price: this.createStateFrom.value.price,
      hotel: this.createStateFrom.value.hotel,
      services: this.getSelectedServices(),
      available: true,
    }
    // console.log(this.selectedHotelFacilities.values);
    this.RoomServicesSV.addRoom(mov);
    this.route.navigate(['/admin/rooms']);
  }

  updatePost(){
    this.actualRoom.name=this.createStateFrom.value.name;
    this.actualRoom.hotel= this.createStateFrom.value.hotel;
    this.actualRoom.capacity= this.createStateFrom.value.capacity;
    this.actualRoom.available= this.actualRoom.available;
    this.actualRoom.services= this.getSelectedServices();
    this.actualRoom.price= this.createStateFrom.value.price;
    this.actualRoom.imgs= this.createStateFrom.value.imgs;

    this.RoomServicesSV.updateRoom(this.actualRoom);
    this.route.navigate(['/admin/rooms']);
  }

  // setServices(roomServices: any[]): FormArray{
  //   const formArray = new FormArray([]);
  //   roomServices.forEach(rs => {
  //     formArray.push(
  //       this._builder.group({
  //         name: rs.name,
  //       })
  //     )
  //   })
  //   return formArray;
  // }

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

  
}
