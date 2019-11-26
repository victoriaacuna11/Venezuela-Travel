import { Component, OnInit } from '@angular/core';
import { DestinationInterface } from 'src/app/Models/destination';
import { StateInterface } from 'src/app/Models/state';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { StatesService } from 'src/app/services/states.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-planea-tu-viaje',
  templateUrl: './planea-tu-viaje.component.html',
  styleUrls: ['./planea-tu-viaje.component.scss']
})
export class PlaneaTuViajeComponent implements OnInit {

  destinations: DestinationInterface[];
  statess:StateInterface[];
  destinationFilter:any;
  stateFilter:any;


  //atributo para guardar el hotel
  //hotelSelected:HotelInterface o lo que sea;    Esto se va a asignar en el paso 4
  hotelSelected:any;// este hotel va a ser el seleccionado

  


  //Variable del form--------------------
  reactiveForm:FormGroup;

  
  //-------------------------------------


  //variables que muestran y esconden los pasos
  //cuanso se pasa de una operacion a otra 
  pasos={
    paso_1:false,
    paso_2:false,
    paso_3:false,
    paso_4:false,
    paso_5:true,
    paso_6:false,
    
  }

  //-------------ObjetoPlanea tu viaje----------------------------------------------

  tripPlan={
      code:0, //numero random de como 10 digitos  
      nameReserve:"",
      email:"",
      reserves:[], //comienza vacio pero se le hace push con las reservas
  }

  //reservas que luego seran pusheadas
  reserve={

    arriveDate:"",
    leaveDate:"",
    hotel:"",
    state:"",
    rooms:[],
    cost:0,
    numberOfPeople:0,


  }
   


  //-----FECHAS---------------------------------------------------------------------

    minDateArrive= new Date();


        //ejemplo de la validacion 
    //year=2019;
    //month=10;
    //date=25;

    //minDateLeave= new Date( this.year, this.month, this.date);

  //--------------------------------------------------------------------------




  //DATA ESTATICA PARA PRUEBAS------------------------------------
    hotels=[

            {name:"Hilton",

            state:"Caracas",

              rooms:[
                {
                  id:1,
                  roomName:"CuartoGrande",
                  capacity:2,
                  costNight:50,
                  fullDayCost:20,
                },
                {
                  id:2,
                  roomName:"CuartoUltraGrande",
                  capacity:4,
                  costNight:100,
                  fullDayCost:50,
                }
              ]

            },


            {name:"Vesperia",
             state:"Merida",

              rooms:[
                {
                  roomName:"CuartoBoleta",
                  capacity:3,
                  costNight:70,
                  fullDayCost:100,
                },
                {
                  roomName:"CuartoUltraBoleta",
                  capacity:7,
                  costNight:150,
                  fullDayCost:70,
                }
              ]

            },

            {name:"HotelX",
              state:"Trujillo",

              rooms:[
                {
                  roomName:"CuartoBoleta",
                  capacity:3,
                  costNight:70,
                  fullDayCost:100,
                },
                {
                  roomName:"CuartoUltraBoleta",
                  capacity:7,
                  costNight:150,
                  fullDayCost:70,
                }
              ]

            }
    ]


  //-------------------------------------------------------------------------



  constructor(private router:Router, 
              private destinationSV:DestinationsService,
              private routeSV:ActivatedRoute,
              private _states:StatesService,
              private _fb:FormBuilder,
              
     ) { }

  ngOnInit() {
    
    this.getStates();
    this.getDestinations();

    //FORM  
    this.reactiveForm=this._fb.group({

      nameReserve:['',Validators.required],
      email:['', [Validators.required, Validators.email] ],
      numReserves:['', Validators.required ],
      arriveDate:['',Validators.required],
      leaveDate:['',Validators.required],
      rooms: this._fb.array([this.addRoomGroup()])
      
    })

    
   
  }
//--------------------------------CUARTOS----------------------------------------------
  addRoomGroup(){
    return this._fb.group({
      roomName:[''],
      roomCant:[''],
    })
  }

  get roomArray(){
    return <FormArray>this.reactiveForm.get('rooms');
  }

  addRoom(){
        this.roomArray.push(this.addRoomGroup());
  }
  removeRoom(index){

      this.roomArray.removeAt(index);
  }

//--------------------------------CUARTOS----------------------------------------------

  getDestinations(){
    this.destinationSV.getDestinationsCollection().subscribe(
      res => (this.destinations = res.map(item =>
        {
          const destination: DestinationInterface = {
            id: item.payload.doc.id,
            name: item.payload.doc.get('name'),
            bannerImg: item.payload.doc.get('bannerImg'),
            views: item.payload.doc.get('views'),
            visits: item.payload.doc.get('visits')
          }
          return destination;
        }))
    )
  }

  getStates(){
    this._states.getStatesCollection().subscribe(
      res => (this.statess = res.map(item =>
        {
          const statey: StateInterface = {
            id: item.payload.doc.id,
            name: item.payload.doc.get('name'),
            bannerImg: item.payload.doc.get('bannerImg'),
            imgs: item.payload.doc.get('imgs'),
            gastronomy: item.payload.doc.get('gastronomy'),
            culture: item.payload.doc.get('culture'),
            recreativeActs: item.payload.doc.get('recreativeActs'),
            mainHotels: item.payload.doc.get('mainHotels'),
            views: item.payload.doc.get('views'),
            visits: item.payload.doc.get('visits'),
            destination:  item.payload.doc.get('destination'),
            touristDestinations: item.payload.doc.get('touristDestinations'),
          }
          return statey;
        }))
    )
  }

  //---------------FILTERS----------------------------

    
    filterOnDestination(stateSelect:StateInterface){

        let isIn=false;

            //aca tambien coloca la propiedad del objeto de si esta activo o no
          if(this.destinationFilter==stateSelect.destination){

            isIn=true;
            
          }

        return isIn;

    }

    //por ahora recibe  los strings
    filterOnState(state:string){

          let isIn=false;

          //aca tambien coloca la propiedad del objeto de si esta activo o no
          if(this.stateFilter==state  ||  this.stateFilter==null){

            isIn=true;
            
          }

        return isIn;

    }
  //-------------------------------------------------
  


  selectDest(destinoSelect:DestinationInterface){

    this.destinationFilter=destinoSelect.name;

  }
  selectState(stateSelect:StateInterface){

    this.stateFilter=stateSelect.name;

  }

  //por ahora le paso los strings
  selectHotel(hot:string,stat:string){

    this.reserve.hotel=hot;
    this.reserve.state=stat;


    //comentarlo despues
    console.log(this.reserve);


  }


  submitHandler(){

    this.tripPlan.nameReserve=this.reactiveForm.value.nameReserve;
    this.tripPlan.email=this.reactiveForm.value.email;
    this.reserve.numberOfPeople=this.reactiveForm.value.numReserves;
   // console.log(this.reactiveForm.value.arriveDate._i);


    //transforma la fecha que se obtuvo de el calendario en un string para pasarselo al reserve 
    let arrive=this.reactiveForm.value.arriveDate._i;
    let aDay=arrive.date;
    let aMonth=arrive.month;
    let aYear=arrive.year;
    let fullArriveDate=aDay+"/"+aMonth+"/"+aYear;
    this.reserve.arriveDate=fullArriveDate;

    //console.log(fullArriveDate);


    //console.log(this.reactiveForm.value.leaveDate);
    let leave=this.reactiveForm.value.leaveDate._i;
    let lDay=leave.date;
    let lMonth=leave.month;
    let lYear=leave.year;
    let fullLeaveDate=lDay+"/"+lMonth+"/"+lYear;
    this.reserve.leaveDate=fullLeaveDate;


    //Pone el nuevo min date como el dia que se va 

    this.minDateArrive= new  Date( lYear, lMonth, lDay);


    //console.log(fullLeaveDate);

    
      let arriving= new Date(aYear,aMonth,aDay);
      let leaving= new Date( lYear, lMonth, lDay);

      

      console.log(this.reactiveForm.value);



      let daysOfTrip=(leaving.getTime()-arriving.getTime())/86400000 ;
    
    //numero de dias entre las fechas
      console.log(daysOfTrip);

    let costo=0;

    let counter=0;
    

    for ( let r of this.roomArray.controls) {

       //console.log(this.reactiveForm.get(['rooms', counter]).value.roomName);

      for (let index = 0; index < this.hotels[0].rooms.length; index++) {
        
        
      
       if(this.reactiveForm.get(['rooms', counter]).value.roomName==this.hotels[0].rooms[index].roomName){

                 

        costo=costo+(daysOfTrip*this.hotels[0].rooms[index].costNight*
          this.reactiveForm.get(['rooms', counter]).value.roomCant);

          

       }
      
      }


       counter=counter+1;
    }


    //costo total de la reserva
    console.log(costo);
    this.reserve.cost=costo;


    let capacity=0;
    let counter2=0;


for ( let r of this.roomArray.controls) {

       //console.log(this.reactiveForm.get(['rooms', counter]).value.roomName);

      for (let index = 0; index < this.hotels[0].rooms.length; index++) {
        
        
      
       if(this.reactiveForm.get(['rooms', counter2]).value.roomName==this.hotels[0].rooms[index].roomName){

                 

        capacity=capacity+(this.hotels[0].rooms[index].capacity*
          this.reactiveForm.get(['rooms', counter2]).value.roomCant);

          

       }
      
      }


       counter2=counter2+1;
    }


    let counter3=0;
    //capacidad para hacer la validacion de si son suficientes cuartos
    console.log(capacity);
      
    for ( let r of this.roomArray.controls) {

      //console.log(this.reactiveForm.get(['rooms', counter]).value.roomName);

     this.reserve.rooms.push(this.reactiveForm.get(['rooms',counter3]).value);


     counter3=counter3+1;
   }
    


  //console.log(this.minDateArrive);


   if(this.tripPlan.code==0){

      this.tripPlan.code=Math.floor(Math.random()*9000000+1000000);
   }

  //descomentar despues
    this.tripPlan.reserves.push(this.reserve);

    console.log(this.tripPlan);

   // console.log(this.reactiveForm);

  }



  
  passToStep2(){
    this.pasos.paso_1=!this.pasos.paso_1;
    this.pasos.paso_2=!this.pasos.paso_2;
  }
  passToStep3(){
    this.pasos.paso_2=!this.pasos.paso_2;
    this.pasos.paso_3=!this.pasos.paso_3;
  }
  passToStep4(){
    this.pasos.paso_3=!this.pasos.paso_3;
    this.pasos.paso_4=!this.pasos.paso_4;
  }
  passToStep5(){
    this.pasos.paso_4=!this.pasos.paso_4;
    this.pasos.paso_5=!this.pasos.paso_5;
  }
  passToStep6(){
    this.pasos.paso_5=!this.pasos.paso_5;
    this.pasos.paso_6=!this.pasos.paso_6;
  }
  passToStep7(){
    this.pasos.paso_6=!this.pasos.paso_6;
    this.pasos.paso_1=!this.pasos.paso_1;
  }
 
  //sucede cuando se de la a reservar otra vez
 


  


}






