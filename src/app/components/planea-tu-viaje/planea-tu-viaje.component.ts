import { Component, OnInit } from '@angular/core';
import { DestinationInterface } from 'src/app/Models/destination';
import { StateInterface } from 'src/app/Models/state';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationsService } from 'src/app/services/destinations.service';
import { StatesService } from 'src/app/services/states.service';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-planea-tu-viaje',
  templateUrl: './planea-tu-viaje.component.html',
  styleUrls: ['./planea-tu-viaje.component.scss']
})
export class PlaneaTuViajeComponent implements OnInit {

  destinations: DestinationInterface[];
  statess:StateInterface[];
  desti:any;
  destinPassed:any;
  statPassed:any;

  //Variable del form--------------------
  reactiveForm:FormGroup;
  //-------------------------------------


  //variables que muestran y esconden los pasos
  //cuanso se pasa de una operacion a otra 
  pasos={
    paso_1:true,
    paso_2:true,
    paso_3:true,
    paso_4:true,
    paso_5:true,
    paso_6:true,
    paso_7:true,
  }

  //-------------ObjetoPlanea tu viaje----------------------------------------------

  tripPlan={

      nameReserve:"",
      email:"",
      reserves:[], //comienza vacio pero se le hace push con las reservas
  }

  //reservas que luego seran pusheadas
  reserve={

    arriveDate:"",
    laveDate:"",
    hotel:"",
    state:"",
    rooms:[],
    cost:0,


  }
   


  //-----FECHAS---------------------------------------------------------------------

    minDateArrive= new Date();


        //ejemplo de la validacion 
    //year=2019;
    //month=10;
    //date=25;

    

  //--------------------------------------------------------------------------


  //DATA ESTATICA PARA PRUEBAS------------------------------------


    hotels=[

            {name:"Hilton",

            state:"Caracas",

              rooms:[
                {
                  roomName:"CuartoGrande",
                  capacity:2,
                  costNight:50,
                  fullDayCost:20,
                },
                {
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
    this.desti= this.routeSV.snapshot.paramMap.get('desti');
    this.getStates();
    this.getDestinations();

    //FORM  
    this.reactiveForm=this._fb.group({

      nameReserve:[],
      email:[],
      numReserves:[],
      arriveDate:[],
      leaveDate:[],
      
    })
   
  }

  getDestinations(){
    this.destinationSV.getDestinationsCollection().subscribe(
      res => (this.destinations = res.map(item =>
        {
          const destination: DestinationInterface = {
            id: item.payload.doc.id,
            name: item.payload.doc.get('name'),
            bannerImg: item.payload.doc.get('bannerImg'),
            views: item.payload.doc.get('views'),
            visits: item.payload.doc.get('visits'),
            available: item.payload.doc.get('available')
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

  


  selectDest(destinoSelect:DestinationInterface){

    this.destinPassed=destinoSelect.name;

  }
  selectState(stateSelect:StateInterface){

    this.statPassed=stateSelect.name;

    console.log(stateSelect.destination);

    

    //console.log(stateSelect.destinations); no se puede todavia por el error en firebase y el servicio
    

  }

  //por ahora le paso los strings
  selectHotel(hot:string,stat:string){

    this.reserve.hotel=hot;
    this.reserve.state=stat;

    console.log(this.reserve);


  }


  submitHandler(){
    console.log(this.reactiveForm);
    this.pasos.paso_6=!this.pasos.paso_6;
    
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
    this.pasos.paso_7=!this.pasos.paso_7;
  }
 
  //sucede cuando se de la a reservar otra vez
  passToStep1(){

    this.pasos.paso_7=!this.pasos.paso_7;
    this.pasos.paso_1=!this.pasos.paso_1;
  }




}



