import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateInterface } from '../../Models/state';
import { StatesService } from 'src/app/services/states.service';
import { DestinationInterface } from 'src/app/Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  public filtro;
  public isFiltered = "false";
  //public id;
  public statess: StateInterface[] = [];
  destination: DestinationInterface;
  search = '';
  loading = false;
  id = '';
  estados: DestinationInterface[];
  isAll = true;
  contViews;
  state: StateInterface;
  showReturn = false;



  statesss: StateInterface[];
  loadingDestination: boolean;


  constructor(private route: ActivatedRoute, private _states: StatesService, private _dest: DestinationsService) { }

  ngOnInit() {
    //let destino=this.route.snapshot.paramMap.get('destinoPrueba')
    //this.filtro=destino;

    if (this.route.snapshot.paramMap.get('id') == undefined) {
      this.getStates();
    } else {
      this.isAll = false;
      this.id = this.route.snapshot.paramMap.get('id');
      //this.destination = this._dest.getDestinationById(id);

      //const nameD = this.destination.name;
      const id = this.route.snapshot.paramMap.get('id');
      //this.destination = this._dest.getDestinationById(id);

      this.getStates2();
    }
  }

 

  isDestiny(state: string[]) {

    var isThere = false;

    for (let i = 0; i < state.length; i++) {

      if (state[i] == this.filtro) {
        isThere = true;
      }
    }
    return isThere;
  }

  receiveMessage($event) {
    this.search = $event
  }

  getStates() {
    this.showReturn = false;
    console.log("in states: " +this.showReturn);
    this._states.getStatesCollection().subscribe(
      res => (this.statess = res.map(item => {
        const statey: StateInterface = {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        }
        return statey;

      }))
    )
    this.loading = false;
  }

  getStates2() {
    this.showReturn = false;
    this._states.getStateByCategory(this.id).then(arr => {
      arr.forEach(element => {
        const sta: StateInterface = {
          id: element.id,
          available: element.get('available'),
          name: element.get('name'),
          bannerImg: element.get('bannerImg'),
          imgs: element.get('imgs'),
          gastronomy: element.get('gastronomy'),
          culture: element.get('culture'),
          recreativeActs: element.get('recreativeActs'),
          mainHotels: element.get('mainHotels'),
          destination: element.get('destination'),
          touristDestinations: element.get('touristDestinations'),
          views: element.get('views'),
          visits: element.get('visits'),
        }

        if(sta.available == true){
        this.statess.push(sta);
        }
      });
    });
  }

  getDestination() {
    const id = this.route.snapshot.paramMap.get('id');
    this._dest.getDestinationById(id).subscribe(res => {
      const dest: DestinationInterface = {
        id: res.payload.id,
        ...res.payload.data()
      }
      this.destination = dest;
      this.loadingDestination = false;
    })
  }

  showMostViewed(){
    
    this.showReturn = true;
    console.log("in method: "+this.showReturn);
    this.statess = this.statess.filter(e => e.views>0)
    .sort(function(a,b) {
      return b.views-a.views;
    });  
    console.log(this.statess);  
    return this.statess;;
  }

  showMostVisited(){
    
    this.showReturn = true;
    this.statess=this.statess.filter(e => e.visits>0)
       .sort(function(a,b) {
         return b.visits-a.visits;
       });
       return this.statess;
     }

  addView(id){
    let found=false;
    let cont=0;
    while(!found && cont<this.statess.length){
      if(this.statess[cont].id===id){
        found=true;
        this.statess[cont].views=this.statess[cont].views+=1;
        this.state = this.statess[cont];
      }
      cont=cont+1;
    }
    console.log(this.state);
    this._states.updateS(this.state);
  }
}
