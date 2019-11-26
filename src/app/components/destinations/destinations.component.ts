import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DestinationInterface } from '../../Models/destination';
import { DestinationsService } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent implements OnInit {

  
  // public destinations: DestinationInterface []=[
  //   {name:"Selva",
  //   bannerImg: "assets/img/img1-dest.jpg",
  //   visits:2000,
  //   views:5000,
  // },
    
  //   {name:"Playa",
  //   bannerImg: 'assets/img/img7-dest.jpg',
  //   visits:10000,
  //   views:3000,
  // },

  //   {name:"Montaña",
  //   bannerImg: 'assets/img/img4-dest.jpg',
  //   visits:4000,
  //   views:1000},

  //   {name:"Médanos",
  //   bannerImg: 'assets/img/img6-dest.jpg',
  //   visits:6000,
  //   views:5000},

  //   {name:"Ciudad",
  //   bannerImg: 'assets/img/img9-dest.jpg',
  //   visits:6000,
  //   views:5000},


  // ]

  destinations: DestinationInterface[];

  constructor(private router: Router, private destinationSV: DestinationsService,
    private routeSV: ActivatedRoute) { }

  ngOnInit() {
    this.getDestinations();
  }

  getDestinations(){
    this.destinationSV.getDestinationsCollection().subscribe(
      res => (this.destinations = res.map(item =>
        {
          const destination: DestinationInterface = {
            id: item.payload.doc.id,
            name: item.payload.doc.get('name'),
            bannerImg: item.payload.doc.get('bannerImg'),
            views: item.payload.doc.get('views'),
            visits: item.payload.doc.get('visits'),
            available: item.payload.doc.get('available')
          }
          return destination;
        }))
    )
  }

  // ngOnInit() {
  //   this.destinationSV.getDestinations()
  //    .subscribe(result => {
  //      this.items = result;
  //    })
  //  }

    // onSelect(destinoPrueba:string){
    //   console.log(destinoPrueba);
    //   this.router.navigate(['/estados', destinoPrueba])
    // }

}
