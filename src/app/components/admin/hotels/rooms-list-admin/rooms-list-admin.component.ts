import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/Models/room';
import { RoomService } from 'src/app/Models/roomService';
import { RoomServiceService } from 'src/app/services/room-service.service';

@Component({
  selector: 'app-rooms-list-admin',
  templateUrl: './rooms-list-admin.component.html',
  styleUrls: ['./rooms-list-admin.component.scss']
})
export class RoomsListAdminComponent implements OnInit {

  rooms: Room[];
  constructor(private roomSV: RoomServiceService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms(){
    this.roomSV.getRoomsCollection().subscribe(
      res=>(this.rooms = res.map(item=>
        {
          const room: Room = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          
          return room;
        })
      )
    )
  }
  deleteRoom(id){
    this.roomSV.deleteRoom(id);
  }

}
