import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tourist-info',
  templateUrl: './tourist-info.component.html',
  styleUrls: ['./tourist-info.component.scss']
})
export class TouristInfoComponent implements OnInit {

  @Input() imgbanner: string;
  @Input() titlebanner: string;

  constructor() { }

  ngOnInit() {
  }

}
