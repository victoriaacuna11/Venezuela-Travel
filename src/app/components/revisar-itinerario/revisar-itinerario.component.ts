import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-revisar-itinerario',
  templateUrl: './revisar-itinerario.component.html',
  styleUrls: ['./revisar-itinerario.component.scss']
})
export class RevisarItinerarioComponent implements OnInit {


  id:any;

  constructor(private routeA:ActivatedRoute, private routeN:Router) { }

  ngOnInit() {
  }

  goToRevItine(){

    if(this.id!=null){

      this.routeN.navigate(['/revisarItinerario', this.id]);

    }

  }

}
