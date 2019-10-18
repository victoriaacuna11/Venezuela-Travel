import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-what-we-offer-second',
  templateUrl: './what-we-offer-second.component.html',
  styleUrls: ['./what-we-offer-second.component.scss']
})
export class WhatWeOfferSecondComponent implements OnInit {

  @Input() img1 : string;
  @Input() img2 : string;
  @Input() img3 : string;
  @Input() img4 : string; 
  @Input() title: string;
  @Input() text: string;
  @Input() imgf: string;

  constructor() { }

  ngOnInit() {
  }

}
