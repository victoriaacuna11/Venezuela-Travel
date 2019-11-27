import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateInterface } from '../../Models/state';
import { StatesService } from 'src/app/services/states.service';
import { DestinationInterface } from 'src/app/Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {
  
  public filtro;
  public isFiltered="false";
  //public id;
  public statess: StateInterface [] = [];
  destination: DestinationInterface;
  search = '';
  statesss: StateInterface [];
  loadingDestination:boolean;
  

  constructor(private route:ActivatedRoute, private _states: StatesService, private _dest: DestinationsService) { }

  ngOnInit() {
    //let destino=this.route.snapshot.paramMap.get('destinoPrueba')
    //this.filtro=destino;
    
    if(this.route.snapshot.paramMap.get('id')==undefined){
      this.getStates();
    }else{

      const id = this.route.snapshot.paramMap.get('id');
      // this.destination = this._dest.getDestinationById(id);

      const nameD = this.destination.name;

      this.statess = this._states.states.filter(x => {
        return x.destination === nameD;
      });

      console.log(this.statess);
    //this.statess = this._states.states.find(item => {
    //  return item.id === this.id;
    //})
  }
  }

  isDestiny(state:string[]){

    var isThere=false;

    for (let i = 0; i < state.length; i++) {

      if(state[i]==this.filtro){
        isThere=true;
      }  
    }
    return isThere;
  }

  receiveMessage($event){
    this.search = $event
  }

  getStates(){
    this._states.getStatesCollection().subscribe(
      res => (this.statess = res.map(item =>
        {
          const statey: StateInterface = {
            id: item.payload.doc.id,
            ... item.payload.doc.data()
          }
          return statey;
        }))
    )
  }

  getDestination(){
    const id = this.route.snapshot.paramMap.get('id');
    this._dest.getDestinationById(id).subscribe(res=>{
      const dest:DestinationInterface={
        id: res.payload.id,
        ...res.payload.data()
      }
      this.destination=dest;
      this.loadingDestination=false;
    })
  }

}
