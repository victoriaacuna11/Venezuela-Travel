import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itinerario-details',
  templateUrl: './itinerario-details.component.html',
  styleUrls: ['./itinerario-details.component.scss']
})
export class ItinerarioDetailsComponent implements OnInit {


  idItinerario;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    let id= this.route.snapshot.paramMap.get('id');
    this.idItinerario=id;
  }

}
