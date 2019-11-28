import { Component, OnInit } from '@angular/core';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-list-states',
  templateUrl: './list-states.component.html',
  styleUrls: ['./list-states.component.scss']
})
export class ListStatesComponent implements OnInit {

  states: StateInterface[];
  state: StateInterface;
  

  constructor(private stateSV: StatesService) { }

  ngOnInit() {
    this.getStates();
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
    console.log(this.state);
    this.stateSV.updateS(this.state);
  }

  // habilitate(state: StateInterface){
  //   console.log(this.state);
  //   this.stateSV.updateS(state);

  // }

}


