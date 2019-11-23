import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planea-paso1',
  templateUrl: './planea-paso1.component.html',
  styleUrls: ['./planea-paso1.component.scss']
})
export class PlaneaPaso1Component implements OnInit {

    desti='';
    hot='';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  //pasa un parametro para que el paso 2 sepa que comienza por destinos
  goDestination(){
    this.desti='destino';
    this.router.navigate(['/planViaje/paso2', this.desti ]);
  }

  goHotel(){
    this.hot='hotel';
    this.router.navigate(['/planViaje/paso2', this.hot]);
  }


}
