import { Component, OnInit } from '@angular/core';
import { hotel } from '../../../Models/hotel'; 
import { HotelsService } from '../../../services/hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  message: hotel[];
  title = "HOTELES";
  message2 : boolean;
  message3 = false;

  openBubble: boolean;

  constructor(
    private _hotels: HotelsService
  ) {
    this.openBubble = false;
   }

  ngOnInit() {
    this._hotels.currentMessage.subscribe(message => this.message = message)
    this._hotels.currentMessage2.subscribe(message2 => this.message2 = message2)
  }

  vuelve(){
    this._hotels.changeMessage(this._hotels.initialList());
    this._hotels.changeMessage2(false);
  }

}
