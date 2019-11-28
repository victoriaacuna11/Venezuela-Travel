import { Component, OnInit } from '@angular/core';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';
import { TouristDestination } from 'src/app/Models/touristDestination';
import { TouristDestinationsService } from 'src/app/services/tourist-destinations.service';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotel } from 'src/app/Models/hotel';
import { Room } from 'src/app/Models/room';
import { RoomServiceService } from 'src/app/services/room-service.service';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.scss']
})
export class ListStatesComponent implements OnInit {

  states: StateInterface[];
  state: StateInterface;
  touristDestinations: TouristDestination[];
  hotel: Hotel;
  hotels: Hotel[];
  rooms: Room[];
  room: Room;
  

  constructor(private stateSV: StatesService, private tDestSV: TouristDestinationsService, private hotelSV:HotelsService,
    private roomSV:RoomServiceService) { 
    
  }

  ngOnInit() {
    this.getStates();
    this.getTouristDestinations();
    this.getHotels();
    this.getRooms();
    
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

  getTouristDestinations(){
    this.tDestSV
    .getTDestinationCollection()
    .subscribe(res =>(this.touristDestinations = res.map(item => 
      {
        const td: TouristDestination = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        return td;
      })
    ));
  } 

  deleteState(id){
    this.stateSV.deleteState(id);
  }

  setEnabled(id){
    let found=false;
    let cont=0;
    while(!found && cont<this.states.length){
      if(this.states[cont].id===id){
        found=true;
        this.states[cont].available=!this.states[cont].available;
        this.state = this.states[cont];
      }
      cont=cont+1;
    }
    this.stateSV.updateS(this.state);
    this.setEnabledTD(id);
    this.setEnabledHotels(id);
  }

  setEnabledTD(id){
    let cont=0;
    while(cont<this.touristDestinations.length){
      if(this.touristDestinations[cont].state===id){
        if(this.state.available===true){
          this.touristDestinations[cont].available=true;
        }else {
          this.touristDestinations[cont].available=false;
        }
        this.tDestSV.updateP(this.touristDestinations[cont]);
      }
      cont=cont+1;
    }
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

  setEnabledHotels(id){
    let cont=0;
    while(cont<this.hotels.length){
      if(this.hotels[cont].state===id){
        if(this.state.available===true){
          this.hotels[cont].available=true;
        }else {
          this.hotels[cont].available=false;
        }
        this.hotelSV.updateH(this.hotels[cont]);
        this.setEnabledRooms(this.hotels[cont].id,this.hotels[cont]);
      }
      cont=cont+1;
    }
  }

  setEnabledRooms(id, hotel:Hotel){
    let cont=0;
    while(cont<this.rooms.length){
      console.log(this.rooms[cont].name);
      if(this.rooms[cont].hotel===id){
        if(hotel.available===false){
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

}


