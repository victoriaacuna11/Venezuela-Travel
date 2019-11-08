import { Component, OnInit, Output } from '@angular/core';
import { HotelsService } from '../../../services/hotels.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  
   showMenu = false;
   showFilter : boolean;

  constructor(
    private _hotels: HotelsService
  ) { }

  ngOnInit() {
    this._hotels.currentState.subscribe(showFilter => this.showFilter=showFilter)
  }

  showM(){
    this.showMenu= !this.showMenu;
    this.showFilter= false;
  }
  
  showF(){
    this._hotels.changeState(!this.showFilter);
    this.showMenu=false;
  }



}
