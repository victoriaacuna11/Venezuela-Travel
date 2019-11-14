import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-img',
  templateUrl: './banner-img.component.html',
  styleUrls: ['./banner-img.component.scss']
})
export class BannerImgComponent implements OnInit {

  @Input() title:string;
  @Input() img:string;

  constructor() { }

  ngOnInit() {
  }

}
