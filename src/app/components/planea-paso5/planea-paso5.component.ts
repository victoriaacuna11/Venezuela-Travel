import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planea-paso5',
  templateUrl: './planea-paso5.component.html',
  styleUrls: ['./planea-paso5.component.scss']
})
export class PlaneaPaso5Component implements OnInit {



  minDate= new Date();
  maxDate= new Date(2019, 11, 31);

  constructor() { }

  ngOnInit() {
  }

}
