import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { Room } from 'src/app/Models/room';
import { HotelsService } from 'src/app/services/hotels.service';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReserveService } from 'src/app/services/reserve.service';
import { ReserveInterface } from 'src/app/Models/reserve';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-reserva',
  templateUrl: './admin-reserva.component.html',
  styleUrls: ['./admin-reserva.component.scss']
})
export class AdminReservaComponent implements OnInit {

  hotels: Hotel[];
  hotel: string //Guarda el id del hotel seleccionado;
  initialHotel: Hotel;
  rooms: Room[];
  loadingRooms:boolean;
  loadingHotels: boolean;
  modifyHotel:boolean;
  modifyRoom:boolean;
  createStateFrom: FormGroup;
  reserve: ReserveInterface;
  loadingReserve:boolean;

  constructor(private hotelSV:HotelsService, private roomSV: RoomServiceService, private _builder: FormBuilder,
    private reserveSV: ReserveService, private routeSV: ActivatedRoute) { }

  ngOnInit() {
    this.loadingHotels=true;
    this.loadingRooms=true;
    this.loadingReserve=false;
    this.modifyHotel=false;
    this.modifyRoom=false;
    this.getReserve();
    this.getHotels();
    this.getRooms();

    this.createStateFrom.patchValue({
      cost:this.reserve.cost,
      numberOfPeople:this.reserve.numberOfPeople,
    })
   // this.createStateFrom.setControl('hotel')

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

  getRooms(){
    this.roomSV.getRoomsCollection().subscribe(
      res=>(this.rooms = res.map(item=> {
          const room: Room = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          this.loadingRooms=false;
          return room;
        })
        )
        
        )
      }

  getReserve(){
    const id= this.routeSV.snapshot.paramMap.get('id');
    this.reserveSV.getReserveById(id).subscribe(arr => {
      const reserve: ReserveInterface={
        id:arr.payload.id,
        ...arr.payload.data(),
      }
      this.reserve=reserve;
      this.hotel=reserve.hotel;
      this.getInitialHotel(this.hotel);
      this.loadingReserve=false;
    })
  }

  getInitialHotel(id:string){

    this.hotelSV.getHotelById(id).subscribe(arr => {
      const hotel: Hotel={
        id:arr.payload.id,
        ...arr.payload.data(),
      }
      this.initialHotel=hotel;
    })
  }

  changeHotel(){
    this.modifyHotel=true;
    this.changeRoom();
  }

  changeRoom(){
    this.modifyRoom=true;
  }

  newHotel(){
    const hotel=this.createStateFrom.value.hotel;
    this.hotel=hotel;
  }

}
