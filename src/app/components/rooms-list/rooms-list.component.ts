import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  hotel: Hotel;

  constructor(private hotelSV: HotelsService) { }

  ngOnInit() {
    //this.hotel=this.hotelSV.getHotelX();
  }

}
