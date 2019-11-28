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
  room: Room;
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
