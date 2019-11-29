import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Models/room';
import { RoomService } from 'src/app/Models/roomService';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { Hotel } from 'src/app/Models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-rooms-list-admin',
  templateUrl: './rooms-list-admin.component.html',
  styleUrls: ['./rooms-list-admin.component.scss']
})
export class RoomsListAdminComponent implements OnInit {

  rooms: Room[];
  room: Room;
  loading:boolean;
  loadingHotels:boolean;
  hotels:Hotel[];

  constructor(private roomSV: RoomServiceService, private hotelSV: HotelsService) { }

  ngOnInit() {
    this.loadingHotels=true;
    this.loading=true;
    this.getRooms();
    this.getHotels();
  }

  getRooms(){
    this.roomSV.getRoomsCollection().subscribe(
      res=>(this.rooms = res.map(item=>
        {
          const room: Room = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          this.loading=false;
          return room;
        })
      )
    )
  }

  getHotels(){
    this.hotelSV.getHotelsCollection().subscribe(res=>(this.hotels = res.map(item=>
      {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        this.loadingHotels=false;
        return hotel;
      })
    ))
  }

  deleteRoom(id){
    this.roomSV.deleteRoom(id);
  }

  setEnabled(id){

    let found=false;
    let cont=0;
    while(!found && cont<this.rooms.length){
      if(this.rooms[cont].id===id){
        found=true;
        this.rooms[cont].available=!this.rooms[cont].available;
        this.room = this.rooms[cont];
      }
      cont=cont+1;
    }
    console.log(this.room);
    this.roomSV.updateRoom(this.room);
  }

}
