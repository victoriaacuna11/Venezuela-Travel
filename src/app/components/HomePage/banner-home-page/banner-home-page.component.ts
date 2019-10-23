import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-banner-home-page',
  templateUrl: './banner-home-page.component.html',
  styleUrls: ['./banner-home-page.component.scss']
})
export class BannerHomePageComponent implements OnInit {

  @Input() img: string;
  @Input() gif: string;
  @Input() VenezuelaTitle: string;
  @Input() TravelTitle: string;
  @Input() imgdefault: string;

  constructor() { }

  ngOnInit() {
  }

  

}
