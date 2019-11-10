import { Component, OnInit, Input } from '@angular/core';
import { StateInterface } from 'src/app/Models/state';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-tourist-info',
  templateUrl: './tourist-info.component.html',
  styleUrls: ['./tourist-info.component.scss']
})
export class TouristInfoComponent implements OnInit {

  @Input() imgbanner: string;
  @Input() titlebanner: string;
  state: StateInterface;

  constructor(private stateSV: StatesService) { 
    
  }

  ngOnInit() {
    this.state=this.stateSV.getState();
    console.log(this.state.touristDestinations);
  }

}
