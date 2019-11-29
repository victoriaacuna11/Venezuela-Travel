import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { DestinationInterface } from 'src/app/Models/destination';
import { StateInterface } from 'src/app/Models/state';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { StatesService } from 'src/app/services/states.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HotelsService } from 'src/app/services/hotels.service';
import { Hotel } from 'src/app/Models/hotel';
import { Room } from 'src/app/Models/room';
import { RoomService } from 'src/app/Models/roomService';
import { RoomServiceService } from 'src/app/services/room-service.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { PlanViajeInterface } from 'src/app/Models/planViaje';
import { PlanTripServiceService } from 'src/app/services/plan-trip-service.service';
import { ReserveService } from 'src/app/services/reserve.service';
import { ReserveInterface } from 'src/app/Models/reserve';
import {  ReserveRoomInterface } from 'src/app/Models/reserveRoom';
import { UsuarioService } from 'src/app/services/usuario.service';






@Component({
  selector: 'app-planea-tu-viaje',
  templateUrl: './planea-tu-viaje.component.html',
  styleUrls: ['./planea-tu-viaje.component.scss']
})
export class PlaneaTuViajeComponent implements OnInit  {
 
   

    // product={
    //   price:10
    // };
    // paidFor=false;

    public payPalConfig?: IPayPalConfig;
    showSuccess =false;

 
     

  //donde voy a guardar el id del trip plan ya creado
  idOfTP;

  //el valor de verdad de si volvio a reservar
  firstReserve=true;




  destinations: DestinationInterface[];
  states:StateInterface[];
  hotels:Hotel[];
  rooms:Room[];

  hotelRooms:any[];
  

  //-----------loaders

  loadingHotels:boolean;
  loadingRooms:boolean;
  loadingDestinations:boolean;
  loadingStates:boolean;

  loadingIdTripPlan:boolean;


  hotelesBoolean:boolean;

  

  //-----cosas solas

  destSolo:DestinationInterface;
  stateSolo:StateInterface;
  hotelSolo:Hotel;

  destinationFilter:any;
  stateFilter:any;
  hotelForShow:any; //lo que se muestra en el nombre del hotel


  //atributo para guardar el hotel
  //hotelSelected:HotelInterface o lo que sea;    Esto se va a asignar en el paso 4
  hotelSelected:Hotel;// este hotel va a ser el seleccionado
  destinationSelected:DestinationInterface;
  stateSelected:StateInterface;

  


  //Variable del form--------------------
  reactiveForm:FormGroup;

  
  //-------------------------------------


  //variables que muestran y esconden los pasos
  //cuanso se pasa de una operacion a otra 
  pasos={
    paso_1:true,
    paso_2:false,
    paso_3:false,
    paso_4:false,
    paso_5:false,
    paso_6:false,
    paso_7:false,
    
  }

  //-------------ObjetoPlanea tu viaje----------------------------------------------

  tripPlan={ // despues crea el objeto como interfaz ajuro
      //code:0, //numero random de como 10 digitos  
      
      name:"",
      email:"",
      reserves:[], //cambiar



  }

  //reservas que luego seran pusheadas
  reserve={

    arriveDate:"",
    leaveDate:"",
    hotel:"",
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

    

  //--------------------------------------------------------------------------


  //estrellas de cada hotel

  stars=[];


  //DATA ESTATICA PARA PRUEBAS------------------------------------
    staticHotels=[

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

  //variable en donde se guarda el monto total de la operacion
    totalCost="1";

    modalShow=false;

  constructor(private router:Router, 
              private destinationSV:DestinationsService,
              private route:ActivatedRoute,
              private stateSV:StatesService,
              private _fb:FormBuilder,
              private hotelSV:HotelsService,
              private roomSV:RoomServiceService,
              private planTripSV:PlanTripServiceService,
              private reserveSV:ReserveService,
              private userSV:UsuarioService,

              
     ) { }

  ngOnInit() {
      


    this.hotelesBoolean=false;

    this.loadingDestinations=true;
    this.loadingHotels=true;
    this.loadingRooms=true;
    this.loadingStates=true;

    this.loadingIdTripPlan=true;


    this.getStates();
    this.getDestinations();
    this.getHotels();
    this.getRooms();

    //FORM  
    this.reactiveForm=this._fb.group({

      nameReserve:['',Validators.required],
      email:['', [Validators.required, Validators.email] ],
      numReserves:['', Validators.required ],
      arriveDate:['',Validators.required],
      leaveDate:['',Validators.required],
      rooms: this._fb.array([this.addRoomGroup()])
      
    })

    
    this.initConfig();


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
          ...item.payload.doc.data(),
        }
        this.loadingDestinations=false;
        return destination;
      }))
  )
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
      this.loadingStates=false;
      return state;
    })
  ));
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
}

//-------------------------------funciones para traerme objetos con el id

getDest(){
  const id = this.route.snapshot.paramMap.get('id');
  this.destinationSV.getDestinationById(id).subscribe(array =>{
    const destSolo:DestinationInterface={
      id: array.payload.id,
      ...array.payload.data()
    }
    this.destSolo=destSolo;
    //this.loadingHotel=false;
    //this.getRooms();
  });
}
getStat(){
  const id = this.route.snapshot.paramMap.get('id');
  this.stateSV.getStateById(id).subscribe(array =>{
    const stateSolo:StateInterface={
      id: array.payload.id,
      ...array.payload.data()
    }
    this.stateSolo=stateSolo;
    //this.loadingState=false;
    //this.getRooms();
  });
}

getHot(){ 
  const id = this.route.snapshot.paramMap.get('id');
  this.hotelSV.getHotelById(id).subscribe(array =>{
    const hotelSolo:Hotel={
      id: array.payload.id,
      ...array.payload.data()
    }
    this.hotelSolo=hotelSolo;
    //this.loadingHotel=false;
    this.getRooms();
  });
}


  //---------------FILTERS----------------------------

    
    filterOnDestination(stateSelect:StateInterface){

        let isIn=false;

            //aca tambien coloca la propiedad del objeto de si esta activo o no
            if((this.destinationSelected!=undefined)&&stateSelect.available){

                  // && state esta disponible
              if(this.destinationSelected.id==stateSelect.destination || this.destinationSelected==undefined){

                isIn=true;
                
              }
            }
          



        return isIn;

    }

    //por ahora recibe  los strings
    filterOnState(hotel:Hotel){

        
          let isIn=false;

            
          //aca tambien coloca la propiedad del objeto de si esta activo o no

     
              //&& hotel esta disponible
          if(  (this.stateSelected==undefined || this.stateSelected.id==hotel.state) && hotel.available ){

            isIn=true;
            
          }


        return isIn;

    }


    isInHotel(room:Room){

      let isIn=false;

        if((this.hotelSelected!=undefined) &&room.available){

          if(this.hotelSelected.id==room.hotel){

            isIn=true;

          }


        }

      return isIn;
  }
  //-------------------------------------------------
  


  selectDest(destinoSelect:DestinationInterface){

    this.destinationFilter=destinoSelect.name;
    this.destinationSelected=destinoSelect;

  }
  selectState(stateSelect:StateInterface){

    this.stateFilter=stateSelect.name;
    this.stateSelected=stateSelect;
  

  }

  //por ahora le paso los strings
  selectHotel(hotel:Hotel){

    this.hotelSelected=hotel;
    this.hotelForShow=hotel.name;

    
    this.reserve.hotel=this.hotelSelected.name;

    //comentarlo despues
    //console.log(this.reserve);

    //para que no sea undefined
    this.hotelRooms=[];
    

    


    for (let index = 0; index < this.rooms.length; index++) {
      
      if(this.rooms[index].hotel==this.hotelSelected.id){ //y si esta disponibleee

        this.hotelRooms.push(this.rooms[index]);

      }
      
    }

    
   //console.log(this.hotelRooms);

  }


  

  submitHandler(){

    if(this.firstReserve){
      this.tripPlan.name=this.reactiveForm.value.nameReserve;
      this.tripPlan.email=this.reactiveForm.value.email;
  
    }
    


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

    


    //console.log(fullLeaveDate);

    
      let arriving= new Date(aYear,aMonth,aDay);
      let leaving= new Date( lYear, lMonth, lDay);

      

      //console.log(this.reactiveForm.value);



      let daysOfTrip=(leaving.getTime()-arriving.getTime())/86400000 ;
    
    //numero de dias entre las fechas
      //console.log(daysOfTrip);

    let costo=0;

    let counter=0;
    

    for ( let r of this.roomArray.controls) {

       //console.log(this.reactiveForm.get(['rooms', counter]).value.roomName);

      for (let index = 0; index < this.hotelRooms.length; index++) {
        
        
      
       if(this.reactiveForm.get(['rooms', counter]).value.roomName==this.hotelRooms[index].name){

                 

        costo=costo+(daysOfTrip*this.hotelRooms[index].price*
          this.reactiveForm.get(['rooms', counter]).value.roomCant);

          

       }
      
      }


       counter=counter+1;
    }


    //costo total de la reserva
   // console.log(costo);
    this.reserve.cost=costo;


    let capacity=0;
    let counter2=0;


for ( let r of this.roomArray.controls) {

       //console.log(this.reactiveForm.get(['rooms', counter]).value.roomName);

      for (let index = 0; index < this.hotelRooms.length; index++) {
        
        
      
       if(this.reactiveForm.get(['rooms', counter2]).value.roomName==this.hotelRooms[index].name){

                 

        capacity=capacity+(this.hotelRooms[index].capacity*
          this.reactiveForm.get(['rooms', counter2]).value.roomCant);

          

       }
      
      }


       counter2=counter2+1;
    }


    let counter3=0;
    //capacidad para hacer la validacion de si son suficientes cuartos
    console.log(capacity);
      
    for ( let r of this.roomArray.controls) {//le hace push con los valores del arrayfrom

      //console.log(this.reactiveForm.get(['rooms', counter]).value.roomName);

     //this.reserve.rooms.push(this.reactiveForm.get(['rooms',counter3]).value);


     //hotelRooms

        for (let index = 0; index < this.hotelRooms.length; index++) {

            if(this.hotelRooms[index].name==this.reactiveForm.get(['rooms',counter3]).value.roomName){

              let expressRoom={
                roomName:this.hotelRooms[index].id,
                roomCant:this.reactiveForm.get(['rooms',counter3]).value.roomCant
              }

              this.reserve.rooms.push(expressRoom);
              

            }
          
          
        }



     counter3=counter3+1;
   }
    


  //console.log(this.minDateArrive);


   //if(this.tripPlan.code==0){

     // this.tripPlan.code=Math.floor(Math.random()*9000000+1000000);
   //}

  //descomentar despues

    this.tripPlan.reserves.push(this.reserve);

    console.log(this.tripPlan);

   // console.log(this.reactiveForm);

   this.reactiveForm.reset(); //resetea el form

   this.minDateArrive= new  Date( lYear, lMonth, lDay);




   //reset all

   this.reserve={

    arriveDate:"",
    leaveDate:"",
    hotel:"",
    rooms:[],
    cost:0,
    numberOfPeople:0,

  }
  let rd:any;
  let rs:any;
  let rh:any;
  this.destinationFilter=rd;
  this.stateFilter=rs;
  this.hotelForShow=rh;

//reseteamos los objetos de los hoteles estados y destinos
  let hSr:Hotel;
  let dSr:DestinationInterface;
  let sSr:StateInterface;
  this.destinationSelected=dSr;
  this.stateSelected=sSr;
  //this.hotelSelected=hSr;






   this.passToStep6();

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

    let hstar=[];

    //inicializamos las estrellas
    for (let i = 0; i < this.hotels.length; i++) {
      
        for (let j = 0; j < this.hotels[i].stars; j++) {
          
          hstar.push(0);//se le ponen tantos ceros como la cantidad de estrellas

        }

        this.stars.push(hstar);//se le pone al array en la posicion del hotel al que pertenece

        hstar=[];

    }

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
    this.pasos.paso_7=!this.pasos.paso_7;
  }

  //sucede cuando se de la a reservar otra vez
    reserveAgain(){
    this.pasos.paso_6=!this.pasos.paso_6;
    this.pasos.paso_1=!this.pasos.paso_1;
    this.firstReserve=false;
  }
  irHoteles(){
    this.pasos.paso_1=!this.pasos.paso_1;
    this.pasos.paso_4=!this.pasos.paso_4;

    let hstar=[];

    //inicializamos las estrellas
    for (let i = 0; i < this.hotels.length; i++) {
      
        for (let j = 0; j < this.hotels[i].stars; j++) {
          
          hstar.push(0);//se le ponen tantos ceros como la cantidad de estrellas

        }

        this.stars.push(hstar);//se le pone al array en la posicion del hotel al que pertenece

        hstar=[];

    }
    console.log(this.stars)

  }

  
  
 


  

  private initConfig(): void {
    this.payPalConfig = {
    currency: 'USD',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '1', //this.totalCost,
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '1', //this.totalCost,
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: '1', //this.totalCost,
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      //console.log('onApprove - transaction was approved, but not authorized');

      //esto tal vez se mueva para despues dependiendo 
    

    let planCrud:PlanViajeInterface={
      name:"",
      email:"",
      available:true,
    };
    console.log(this.tripPlan);

    planCrud.name=this.tripPlan.name;
    planCrud.email=this.tripPlan.email;
    planCrud.available=true;

    //crea el crud
    //console.log("revisa firebase");

    this.planTripSV.addPlanTrip(planCrud).then(item=>{

      this.idOfTP=item.id;
      this.loadingIdTripPlan=false;
      console.log(this.idOfTP);

    }).catch(err=>{

      console.log(err);
      

    }).finally(()=>{

      this.loadingIdTripPlan=false;

      
  
      
      for (let i = 0; i < this.tripPlan.reserves.length; i++) {
        
            //vacio el array
            // for (let index = 0; index < reserveCrud.rooms.length; index++) {
              
            //   reserveCrud.rooms.pop();
            // }
            
            let reserveCrud:ReserveInterface={//tal vez si meto esto aca funcione

              available:true,
              arriveDate:"",
              leaveDate:"",
              hotel:"", //el id del hotel
              cost:0,
              numberOfPeople:0,
              rooms:ReserveRoomInterface[0]=[],
              tripPlan:"", //id del trip plan al que pertenece
        
            };
        
            reserveCrud.rooms.pop();



        reserveCrud.arriveDate=this.tripPlan.reserves[i].arriveDate;
        reserveCrud.leaveDate=this.tripPlan.reserves[i].leaveDate;
        reserveCrud.hotel=this.hotelSelected.id;
        reserveCrud.cost=this.tripPlan.reserves[i].cost;
        reserveCrud.numberOfPeople=this.tripPlan.reserves[i].numberOfPeople;
        reserveCrud.available=true;
  
        
  
          for (let j = 0; j < this.tripPlan.reserves[i].rooms.length; j++) {

            
  
            let roomCrud:ReserveRoomInterface={
  
              roomName:"",
              roomCant:0,
  
            };
            
  
            roomCrud.roomName=this.tripPlan.reserves[i].rooms[j].roomName;
            roomCrud.roomCant=this.tripPlan.reserves[i].rooms[j].roomCant;
          
  
            reserveCrud.rooms.push(roomCrud);
            
          }


          console.log(reserveCrud);
          console.log(this.tripPlan);
  
          //Aqui se le agrega el  id del plan trip como tal
          reserveCrud.tripPlan=this.idOfTP;
          //
  
  
  
          this.reserveSV.addReserve(reserveCrud);




      }



      this.addPost();

    
  
      


    });

      this.modalShow=true;

      //se pone el correo

      actions.order.get().then(details => {
        //console.log('onApprove - you can get full order details inside onApprove: ');
      });
    },
    onClientAuthorization: (data) => {
      //console.log('onClientAuthorization');
      this.showSuccess = true;



      //aqui se pone que pase algo cuando el usuario haya pagado
      

      //console.log("hola gordo");
    },
    onCancel: (data, actions) => {
     // console.log('OnCancel');
    },
    onError: err => {
      //console.log('OnError');
    },
    onClick: (data, actions) => {
      //console.log('onClick');
    },
  };
  }


  //calcula al monto y pasa al paso 
  calcularMonto(){

    let allCost=0;

    for (let index = 0; index < this.tripPlan.reserves.length; index++) {
     
        allCost=allCost+this.tripPlan.reserves[index].cost;

    }

    this.totalCost=allCost.toString();




    
    //recuerda si no funciona lo pones adentro de la mmierda asincrona
    this.passToStep7();

  }



  addPost(){

    const mov={

      name:this.tripPlan.name,
      email:this.tripPlan.email,
      itinerario:this.idOfTP,
    }
    

    this.userSV.addUser(mov);

  }



}













