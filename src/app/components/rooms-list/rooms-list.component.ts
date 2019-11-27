import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/Models/room';
import { RoomServiceService } from 'src/app/services/room-service.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  hotel: Hotel;
  rooms: Room[];
  loadingHotel:boolean;
  loadingRooms: boolean;

  constructor(private hotelSV: HotelsService, private route:ActivatedRoute, private roomSV:RoomServiceService) { }

  ngOnInit() {
    // this.hotel=this.hotelSV.getHotelX();
    this.loadingHotel=true;
    this.loadingRooms=true;
    this.getHotel();
    
  }

  getHotel(){
    const id = this.route.snapshot.paramMap.get('id');
    this.hotelSV.getHotelById(id).subscribe(array =>{
      const hotel:Hotel={
        id: array.payload.id,
        ...array.payload.data()
      }
      this.hotel=hotel;
      this.loadingHotel=false;
      this.getRooms();
    });
  }

  getRooms(){
    this.roomSV
    .getRoomsCollection()
    .subscribe(res =>(this.rooms = res.map(item => 
      {
        const room: Room = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        this.loadingRooms=false;
        return room;
      })
    ));
  }

}
