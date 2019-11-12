import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateInterface } from '../../Models/state';


@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  
  public filtro;
  public isFiltered="false";
  
  
  public states: StateInterface []=[
    {name:"Bolívar",
    bannerImg: 'assets/img/img8-dest.jpg',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name": "Ciudad"}]
  },

    {name:"Distrito Capital",
    bannerImg: "https://venezuelaaldia.com/wp-content/uploads/2017/07/caracas.jpg",
    visits:2000,
    views:5000,
    display:true,
    destinations:[{name:"Ciudad"},
    {"name":"Montaña"}]
  },

   

  {name:"Falcón",
    bannerImg: 'https://steemitimages.com/DQmQ4zQSxK7KPexQafv31R6kgwShzGUVqVYPxH6UtoniCJk/image.png',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name":"Playa"}]
    },
    
    {name:"Mérida",
    bannerImg: 'https://www.eltelegrafo.com.ec/media/k2/items/cache/0dd63e66c3035bda0f70aa3c277a0c98_XL.jpg',
    visits:10000,
    views:3000,
    display:true,
    destinations:[{"name": "Montaña"}]
  },

  {name:"Nueva Esparta",
  bannerImg: 'https://oceandrive.com.ve/wp-content/uploads/2019/08/EM-PORTADA-2.jpg',
  visits:4000,
  views:1000,
  display:true,
  destinations:[{"name":"Playa"}]
},

    {name:"Vargas",
    bannerImg: 'https://vignette.wikia.nocookie.net/venezuela/images/c/cd/La-guaira-slider3.jpg/revision/latest?cb=20190805022707&path-prefix=es',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name":"Playa"}]
  }

  ]

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let destino=this.route.snapshot.paramMap.get('destinoPrueba')
    this.filtro=destino;
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
