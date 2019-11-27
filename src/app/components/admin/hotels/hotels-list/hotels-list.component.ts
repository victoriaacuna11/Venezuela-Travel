import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Models/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  hotels: Hotel[];
  constructor(private hotelSV:HotelsService) { }

  ngOnInit() {
    this.getHotels();
  }
  getHotels(){
    this.hotelSV.getHotelsCollection().subscribe(res=>(this.hotels = res.map(item=>
      {
        const hotel: Hotel = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        return hotel;
      })
    ))
  }

  deleteHotel(id){
    this.hotelSV.deleteHotel(id);
  }
}
