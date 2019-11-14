import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

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
    this._hotels.changeState(this.showFilter=false);
  }
  
  showF(){
    this._hotels.changeState(!this.showFilter);
    this.showMenu=false;
  }

}
