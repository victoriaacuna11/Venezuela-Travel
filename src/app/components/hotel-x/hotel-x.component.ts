import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotel-x',
  templateUrl: './hotel-x.component.html',
  styleUrls: ['./hotel-x.component.scss']
})
export class HotelXComponent implements OnInit {

  hotel:Hotel;
  stars:any[];
  starNum:number;
  loading: boolean = false;

  constructor(private hotelSV: HotelsService) { 
    
  }

  ngOnInit() {
    this.loading=true;
    
    this.hotel=this.hotelSV.getHotelX();
    this.starNum=this.hotel.stars;
    this.stars = Array(this.starNum).fill(0);
  }

}
