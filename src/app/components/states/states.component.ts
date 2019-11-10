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
    {name:"Caracas",
    bannerImg: "http://www.unidadvenezuela.org/Publish/FILES_MediaBroker/Public/_PNG/12491.png?x=1090&y=598&mode=4",
    visits:2000,
    views:5000,
    display:true,
    destinations:[{name:"Ciudad"},
    {"name":"Montaña"}]
  },
    
    {name:"Merida",
    bannerImg: 'https://www.sierranevadademerida.com/wp-content/uploads/2019/07/Sierra-Nevada-de-Merida.jpg',
    visits:10000,
    views:3000,
    display:true,
    destinations:[{"name": "Montaña"}]
  },

    {name:"Vargas",
    bannerImg: 'https://www.publico.es/uploads/2019/06/08/5cfb93f094206.jpg',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name":"Playa"}]
  },

    {name:"Nueva Esparta",
    bannerImg: 'https://media2.trover.com/T/5991b6293b5a051060014e36/fixedw_large_4x.jpg',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name":"Playa"}]
  },

    {name:"Falcon",
    bannerImg: 'https://turismovenezuela.info/images/parquesnacionales/losmedanosdecoro/losmedanosdecoro_1200x600.jpg',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name":"Playa"}]
  },
    {name:"Bolivar",
    bannerImg: 'https://i.pinimg.com/originals/19/42/04/194204cec16624c8d54d46699b72cf54.jpg',
    visits:4000,
    views:1000,
    display:true,
    destinations:[{"name": "Ciudad"}]
  },


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
