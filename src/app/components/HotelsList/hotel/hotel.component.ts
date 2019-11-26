import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../../Models/hotel'; 
import { HotelsService } from '../../../services/hotels.service';

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

  openBubble: boolean;
  showMenu = false;
  showFilter : boolean;


  constructor(
    private _hotels: HotelsService
  ) {
    this.openBubble = false;
   }

  ngOnInit() {
    // this._hotels.currentMessage.subscribe(message => this.message = message)
    this._hotels.currentMessage2.subscribe(message2 => this.message2 = message2)
    this._hotels.currentState.subscribe(showFilter => this.showFilter=showFilter)
  }

  vuelve(){
    // this._hotels.changeMessage(this._hotels.initialList());
    this._hotels.changeMessage2(false);
  }

  showF(){
    this._hotels.changeState(!this.showFilter);
    this.showMenu=false;
  }

  receiveMessage($event){
    this.search = $event
  }

  showInput(){
    this.Input = !this.Input;
  }
}
