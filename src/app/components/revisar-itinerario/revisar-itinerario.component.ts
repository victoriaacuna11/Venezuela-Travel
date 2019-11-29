import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { PlanTripServiceService } from 'src/app/services/plan-trip-service.service';
import { HotelsService } from 'src/app/services/hotels.service';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { Hotel } from 'src/app/Models/hotel';
import { Room } from 'src/app/Models/room';
import { ReserveInterface } from 'src/app/Models/reserve';
import { PlanViajeInterface } from 'src/app/Models/planViaje';

@Component({
  selector: 'app-revisar-itinerario',
  templateUrl: './revisar-itinerario.component.html',
  styleUrls: ['./revisar-itinerario.component.scss']
})
export class RevisarItinerarioComponent implements OnInit {


  idItinerario="";
  showItinerario=false;


  //booleanos de cargar
    loadingTp:boolean;
    loadingHotels:boolean;
    loadingRooms:boolean;
    loadingReserves:boolean;



    //los datos que se obtienen de los gets
    hotels:Hotel[];
    rooms:Room[];
    reserves:ReserveInterface[];
    tripPlans:PlanViajeInterface[];

    //array guarda imagen
    imgHotel=[];


    //objetos para mostrar la info

    tripPlanRev:PlanViajeInterface;
    reservesRev:ReserveInterface[];
    hotelRev:Hotel[];

    //mostrar itinerario
    showInfo=false;

  constructor(private routeA:ActivatedRoute, 
              private routeN:Router,
              private tpSV:PlanTripServiceService,
              private hotelSV:HotelsService,
              private roomSV:RoomServiceService,
              private  reserveSV: ReserveService,
              
              
              ) { }

  ngOnInit() {


    this.loadingHotels=true;
    this.loadingReserves=true;
    this.loadingRooms=true;
    this.loadingTp=true;

    if(this.routeA.snapshot.paramMap.get('id') != undefined){
      this.idItinerario=this.routeA.snapshot.paramMap.get('id');
  }


    this.getHotels();
    this.getReserves();
    this.getTp();
    this.getRooms();

    
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
  
  
 

  getReserves(){
    this.reserveSV.getReserveCollection().subscribe(
      res=>(this.reserves = res.map(item=>
        {
          const reserve: ReserveInterface = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          this.loadingReserves=false;
          
          return reserve;
        })
      )
    )
  }


  getTp(){
    this.tpSV.getPlanTripCollection().subscribe(
      res=>(this.tripPlans = res.map(item=>
        {
          const tp: PlanViajeInterface = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          this.loadingTp=false;
          
          return tp;
        })
      )
    )
  }

  getRooms(){
    this.roomSV.getRoomsCollection().subscribe(
      res=>(this.rooms = res.map(item=>
        {
          const room: Room = {
            id: item.payload.doc.id,
            ...item.payload.doc.data(),
          }
          this.loadingRooms=false;
         
          return room;
        })
      )
    )
  
//aca voy a poner lo que secede una vez que se cargue todo
// for (let index = 0; index < this.tripPlans.length; index++) {
      
//   if(this.idItinerario==this.tripPlans[index].id){

//       this.tripPlanRev=this.tripPlans[index];

//   }
  
// }

// console.log(this.tripPlanRev);

    
  }



  getInfo(){

    
    for (let index = 0; index < this.tripPlans.length; index++) {
          
      if(this.idItinerario==this.tripPlans[index].id){
    
          this.tripPlanRev=this.tripPlans[index];
    
      }
      
    }
    
    console.log(this.tripPlanRev);
    //ahora tenemos tripPlanRev y sacamos el resto de la info con eso


      console.log(this.tripPlanRev.id);
      this.reservesRev=[];


    for (let index = 0; index < this.reserves.length; index++) {
      
      if(this.tripPlanRev.id==this.reserves[index].tripPlan){
    
        this.reservesRev.push(this.reserves[index]);
  
    }
      
    }

    //console.log(this.reservesRev);


    this.hotelRev=[];

    //si da chance por validacion cuartos una sola vez
    for (let i = 0; i < this.reservesRev.length; i++) {
      
      for (let j = 0; j < this.hotels.length; j++) {
        

        if(this.reservesRev[i].hotel==this.hotels[j].id){

          this.reservesRev[i].hotel=this.hotels[j].name;

          this.imgHotel.push(this.hotels[j].imgPrin);

              //this.hotelRev.push(this.hotels[j]);
        }  
      }
    }

   

    console.log(this.reservesRev);

    for (let i = 0; i < this.reservesRev.length; i++) {//for de las reservas


      for (let j = 0; j < this.reservesRev[i].rooms.length; j++) {
        

        for (let k = 0; k < this.rooms.length; k++) {
          
          
            if(this.reservesRev[i].rooms[j].roomName==this.rooms[k].id){

              this.reservesRev[i].rooms[j].roomName=this.rooms[k].name;

            }



        }
        
      }
      


      
    }
    //console.log(this.reservesRev);
    //console.log(this.imgHotel);


    //tal vez cambia esto
    //this.showInfo=true;

    if(this.tripPlanRev.available==true){

    
    this.showItinerario=true;
    
  }

  }



  

}
