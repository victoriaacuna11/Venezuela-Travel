import { Component, OnInit, Input } from '@angular/core';
import { HotelsService } from '../../../services/hotels.service';
import { Hotel } from '../../../Models/hotel';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  message: Hotel[];
  message2: boolean;
  showFilter: boolean;

  constructor(
    private _hotels: HotelsService
  ) { }

  ngOnInit() {
    // this._hotels.currentMessage.subscribe(message => this.message = message)
    this._hotels.currentMessage2.subscribe(message2 => this.message2 = message2)
    this._hotels.currentState.subscribe(showFilter => this.showFilter=showFilter)
  }

  newMessage1(){
    //this._hotels.changeMessage(this._hotels.rearrangeBySells());
    this._hotels.changeMessage2(true);
    this._hotels.changeState(!this.showFilter);

  }

  newMessage2(){
    //this._hotels.changeMessage(this._hotels.rearrangeByViews());   
    this._hotels.changeMessage2(true);
    this._hotels.changeState(!this.showFilter);
  }



}
