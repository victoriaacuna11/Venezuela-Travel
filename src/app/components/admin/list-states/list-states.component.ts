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
          name: item.payload.doc.get('name')
        }
        return state;
      })
    ));
  } 

  deleteState(id){
    this.stateSV.deleteState(id);
  }
}
