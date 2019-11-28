import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';
import { Room } from 'src/app/Models/room';
import { RoomServiceService } from 'src/app/services/room-service.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  hotels: Hotel[];
  hotel: Hotel;
  rooms: Room[];
  room: Room;
  constructor(private hotelSV:HotelsService, private roomSV: RoomServiceService) { }

  ngOnInit() {
    this.getHotels();
    this.getRooms();
  }
  getHotels(){
    this.hotelSV.getHotelsCollection().subscribe(res=>(this.hotels = res.map(item=>
      {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        return hotel;
      })
    ))
  }

  getRooms(){
    this.roomSV.getRoomsCollection().subscribe(res=>(this.rooms = res.map(item=>
      {
        const room: Room = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        return room;
      })
    ))
  }

  deleteHotel(id){
    this.hotelSV.deleteHotel(id);
  }

  setEnabled(id){
    let found=false;
    let cont=0;
    while(!found && cont<this.hotels.length){
      if(this.hotels[cont].id===id){
        found=true;
        this.hotels[cont].available=!this.hotels[cont].available;
        this.hotel = this.hotels[cont];
      }
      cont=cont+1;
    }
    this.hotelSV.updateH(this.hotel);
    this.setEnabledRooms(id);
  }

  setEnabledRooms(id){
    let cont=0;
    while(cont<this.rooms.length){
      if(this.rooms[cont].hotel===id){
        if(this.hotel.available===false){
          this.rooms[cont].available=false;
        } else {
          this.rooms[cont].available=true;
        }
        this.room = this.rooms[cont];
        this.roomSV.updateRoom(this.room);
      }
      cont=cont+1;
    }
  }
}
