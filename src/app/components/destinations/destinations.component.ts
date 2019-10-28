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
    {name:"Ciudad",
    bannerImg: "https://enviajes.cl/wp-content/uploads/2014/08/Lugares-turisticos-de-Venezuela-Puerto-La-Cruz.jpg",
    visits:2000,
    views:5000},
    
    {name:"Playa",
    bannerImg: 'http://elsumario.com/wp-content/uploads/2017/01/El-Sumario-%E2%80%93-Tres-playas-paradisiacas-de-Venezuela-Cayo-de-Agua-en-Los-Roques.jpg',
    visits:10000,
    views:3000},

    {name:"Montaña",
    bannerImg: 'https://cdn.pixabay.com/photo/2017/04/08/17/39/mountains-2213875_960_720.jpg',
    visits:4000,
    views:1000},


  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

    onSelect(destinoPrueba:string){
      console.log(destinoPrueba);
      this.router.navigate(['/estados', destinoPrueba])
    }

}
