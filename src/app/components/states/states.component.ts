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
  public isFiltered="false";
  //public id;
  public statess: StateInterface [];
  destination: DestinationInterface;
  
  
  public states: StateInterface []=[
    {name:"Bolívar",
    bannerImg: 'assets/img/img8-dest.jpg',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name": "Ciudad"}],
    destinationName: 'Ciudad',
  },

    {name:"Distrito Capital",
    bannerImg: "https://venezuelaaldia.com/wp-content/uploads/2017/07/caracas.jpg",
    visits:2000,
    views:5000,
    display:true,
    destinations:[{name:"Ciudad"},
    {"name":"Montaña"}],
    destinationName: 'Ciudad',
  },

   

  {name:"Falcón",
    bannerImg: 'https://steemitimages.com/DQmQ4zQSxK7KPexQafv31R6kgwShzGUVqVYPxH6UtoniCJk/image.png',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name":"Playa"}],
    destinationName: 'Playa',
    },
    
    {name:"Mérida",
    bannerImg: 'https://www.eltelegrafo.com.ec/media/k2/items/cache/0dd63e66c3035bda0f70aa3c277a0c98_XL.jpg',
    visits:10000,
    views:3000,
    display:true,
    destinations:[{"name": "Montaña"}],
    destinationName: 'Montaña',
  },

  {name:"Nueva Esparta",
  bannerImg: 'https://oceandrive.com.ve/wp-content/uploads/2019/08/EM-PORTADA-2.jpg',
  visits:4000,
  views:1000,
  display:true,
  destinations:[{"name":"Playa"}],
  destinationName: 'Playa',
},

    {name:"Vargas",
    bannerImg: 'https://vignette.wikia.nocookie.net/venezuela/images/c/cd/La-guaira-slider3.jpg/revision/latest?cb=20190805022707&path-prefix=es',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name":"Playa"}],
    destinationName: 'Playa',
  }

  ]

  constructor(private route:ActivatedRoute, private _states: StatesService, private _dest: DestinationsService) { }

  ngOnInit() {
    //let destino=this.route.snapshot.paramMap.get('destinoPrueba')
    //this.filtro=destino;

    const id = this.route.snapshot.paramMap.get('id');
    this.destination = this._dest.getDestinationById(id);

    const nameD = this.destination.name;

    this.statess = this.states.filter(function(x) {
      return x.destinationName === nameD;
    });
    //this.statess = this._states.states.find(item => {
    //  return item.id === this.id;
    //})
  }

  isDestiny(state:string[]){

    var isThere=false;

    for (let i = 0; i < state.length; i++) {

      if(state[i]==this.filtro){
        isThere=true;
      }  
    }
    return isThere;
  }

}
