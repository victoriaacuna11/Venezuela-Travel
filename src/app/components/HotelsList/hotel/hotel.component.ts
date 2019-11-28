import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../Models/hotel'; 
import { HotelsService } from '../../../services/hotels.service';
import { ActivatedRoute } from '@angular/router';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  message: Hotel[];
  title = "HOTELES";
  message2 : boolean;
  message3 = false;
  search = '';
  Input = false;
  hotels: Hotel[] = [];
  idState='';
  isAll = true;

  openBubble: boolean;
  showMenu = false;
  showFilter : boolean;

  
  loadingStateName: boolean = false;
  loadingRooms: boolean=false;
  loadingHotel: boolean=false;


  constructor(
    private hotelSV: HotelsService, private routeSV: ActivatedRoute, private roomSV: RoomServiceService,
    private stateSV: StatesService) 
    {
      this.openBubble = false;
    }

  ngOnInit() {

    this.loadingHotel=true;
    this.loadingRooms=true;
    this.loadingStateName=true;

    if (this.routeSV.snapshot.paramMap.get('id') == undefined){
      this.getHotels();
    } else{
      this.isAll = false;
      this.idState = this.routeSV.snapshot.paramMap.get('id');

      this.getHotels2();
    }

    this.hotelSV.currentMessage.subscribe(message => this.message = message)
    this.hotelSV.currentMessage2.subscribe(message2 => this.message2 = message2)
    this.hotelSV.currentState.subscribe(showFilter => this.showFilter=showFilter)
  }

  vuelve(){
    //this.hotelSV.changeMessage(this.hotelSV.initialList());
    this.hotelSV.changeMessage2(false);
  }

  showF(){
    this.hotelSV.changeState(!this.showFilter);
    this.showMenu=false;
  }

  receiveMessage($event){
    this.search = $event
  }

  showInput(){
    this.Input = !this.Input;
  }

  getHotels(){

    this.hotelSV.getHotelsCollection().subscribe(
      res => (this.hotels = res.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        return hotel;

      }))
    )
  }

  getHotels2(){
    this.hotelSV.getHotelsByState(this.idState).then(arr => {
      arr.forEach(element => {
        const hotel: Hotel = {
          id: element.id,
          available: element.get('available'),
          name: element.get('name'),
          description: element.get('description'),
          imgPrin: element.get('imgPrin'),
          stars: element.get('stars'),
          latitude: element.get('latitude'),
          longitude: element.get('longitude'),
          direction: element.get('direction'),
          state: element.get('state'),
          city: element.get('city'),
          fullday: element.get('fullday'),
          services: element.get('services'),
          nrBusquedas: element.get('nrBusquedas'),
          nrVentas: element.get('nrVentas'),
          bannerImg: element.get('bannerImg'),
          imgs: element.get('imgs'),
        }

        if(hotel.available == true){
        this.hotels.push(hotel);
        }
      });
    });
  }

}
