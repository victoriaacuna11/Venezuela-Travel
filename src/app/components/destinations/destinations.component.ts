import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationInterface } from '../../Models/destination';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  
  public destinations: DestinationInterface []=[
    {name:"Selva",
    bannerImg: "assets/img/img1-dest.jpg",
    visits:2000,
    views:5000
  },
    
    {name:"Playa",
    bannerImg: 'assets/img/img7-dest.jpg',
    visits:10000,
    views:3000,
  },

    {name:"Montaña",
    bannerImg: 'assets/img/img4-dest.jpg',
    visits:4000,
    views:1000},

    {name:"Médanos",
    bannerImg: 'assets/img/img6-dest.jpg',
    visits:6000,
    views:5000},

    {name:"Ciudad",
    bannerImg: 'assets/img/img9-dest.jpg',
    visits:6000,
    views:5000},


  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

    onSelect(destinoPrueba:string){
      console.log(destinoPrueba);
      this.router.navigate(['/estados', destinoPrueba])
    }

}
