import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/Models/room';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { StatesService } from 'src/app/services/states.service';
import { StateInterface } from 'src/app/Models/state';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-hotel-x',
  templateUrl: './hotel-x.component.html',
  styleUrls: ['./hotel-x.component.scss']
})
export class HotelXComponent implements OnInit {

  hotel:Hotel;
  stateName: string;
  stars:any[];
  starNum:number;
  rooms: Room[];
  // loading: boolean = false;
  loadingStateName: boolean = false;
  loadingRooms: boolean=false;
  loadingHotel: boolean=false;

  constructor(private hotelSV: HotelsService, private routeSV: ActivatedRoute, private roomSV: RoomServiceService,
    private stateSV: StatesService) { 
    
  }

  ngOnInit() {
    // this.loading=true;

    this.loadingHotel=true;
    this.loadingRooms=true;
    this.loadingStateName=true;

    this.getHotel();
    this.getRooms();
    // this.getStateName();
    // this.hotel=this.hotelSV.getHotelX();
    // this.starNum=this.hotel.stars;
    // this.stars = Array(this.starNum).fill(0);
    

  }

  getHotel(){
    const id = this.routeSV.snapshot.paramMap.get('id');
    this.hotelSV.getHotelById(id).subscribe(
      arr => {
        console.log(arr.payload.data());
        
        const hotel:Hotel={
          id: arr.payload.id,
          ... arr.payload.data()
        }
  
        this.hotel=hotel;
        this.starNum=this.hotel.stars;
        this.stars = Array(this.starNum).fill(0);

        this.loadingHotel=false;

        // this.getLoading();
        // this.loading=false;
        this.getStateName();


      }
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

  getStateName(){
    this.stateSV.getStateById(this.hotel.state).subscribe(
      res=>{
        const state: StateInterface={
          id: res.payload.id,
          ...res.payload.data()
        }
        this.stateName=state.name;

        this.loadingStateName=false;

      }
    )
    // this.loadingStateName=true;
  }

  // getLoading(){
  //   if(this.loadingRooms && this.loadingStateName && this.loadingHotel){
  //     this.loading=false;
  //   }
  // }

}
