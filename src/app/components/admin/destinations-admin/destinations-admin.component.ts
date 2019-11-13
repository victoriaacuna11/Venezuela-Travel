import { Component, OnInit } from '@angular/core';
import { DestinationInterface } from 'src/app/Models/destination';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DestinationsService } from 'src/app/services/destinations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations-admin',
  templateUrl: './destinations-admin.component.html',
  styleUrls: ['./destinations-admin.component.scss']
})
export class DestinationsAdminComponent implements OnInit {

  destinations: DestinationInterface[];
  createStateFrom: FormGroup;

  constructor(private _builder: FormBuilder, private destinationSV: DestinationsService, private route: Router) { }

  ngOnInit() {

    this.createStateFrom=this._builder.group({
      name:['', Validators.required],
      bannerImg: ['', Validators.required]
    })

  }

  addPost(){
    const mov = {
      name: this.createStateFrom.value.name,
      bannerImg: this.createStateFrom.value.bannerImg,
      views: 0,
      visits: 0,
    }
    
    this.destinationSV.addDestination(mov);
    this.route.navigate(['/admin/destinations']);
    // this.route.navigate(['/admin/destinations']);
  }

}
