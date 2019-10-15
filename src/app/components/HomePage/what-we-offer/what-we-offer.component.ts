import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss']
})
export class WhatWeOfferComponent implements OnInit {
  @Input() img1 : string;
  @Input() img2 : string;
  @Input() img3 : string;
  @Input() img4 : string; 
  @Input() title: string;
  @Input() text: string;
  // imagen1: string = "../../../../assets/img/img1-1-hp.jpg";
  // imagen2: string = "../../../../assets/img/img2-1-hp.jpg";
  // imagen3: string = "../../../../assets/img/img3-1-hp.jpg";
  // imagen4: string = "../../../../assets/img/img4-1-hp.jpg";
  

  constructor() { 
  }

  ngOnInit() {
  }

}
