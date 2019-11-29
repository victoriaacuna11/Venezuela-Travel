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
  showReturn = false;
  hotel: Hotel;


  openBubble: boolean;
  showMenu = false;
  showFilter : boolean;

  loadingHotel: boolean=false;
  
  
  loadingHotels: boolean=false;


  constructor(
    private hotelSV: HotelsService, private routeSV: ActivatedRoute, private roomSV: RoomServiceService,
    private stateSV: StatesService) 
    {
      this.openBubble = false;
    }

  ngOnInit() {

    this.loadingHotel=true;
    this.loadingHotels=true;

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

    this.showReturn=false;
    this.hotelSV.getHotelsCollection().subscribe(
      res => (this.hotels = res.map(item => {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        this.loadingHotel = false;
        return hotel;
      }))
    ); 
  }

  getHotels2(){
    this.showReturn = false;
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

        this.loadingHotel = false;
        if(hotel.available == true){
          
        this.hotels.push(hotel);
        this.loadingHotels=false;
        }
      });
    });
  }

  showMostViewed(){
    
    this.showReturn = true;
    console.log("in method: "+this.showReturn);
    this.hotels = this.hotels.filter(e => e.nrBusquedas>0)
    .sort(function(a,b) {
      return b.nrBusquedas-a.nrBusquedas;
    });  
    console.log(this.hotels);  
    return this.hotels;;
  }

  showMostVisited(){
    
    this.showReturn = true;
    this.hotels=this.hotels.filter(e => e.nrVentas>0)
       .sort(function(a,b) {
         return b.nrVentas-a.nrVentas;
       });
       return this.hotels;
     }

  addView(id){
    let found=false;
    let cont=0;
    while(!found && cont<this.hotels.length){
      if(this.hotels[cont].id===id){
        found=true;
        this.hotels[cont].nrBusquedas=this.hotels[cont].nrBusquedas+=1;
        this.hotel = this.hotels[cont];
      }
      cont=cont+1;
    }
    console.log(this.hotel);
    this.hotelSV.updateH(this.hotel);
  }

}
