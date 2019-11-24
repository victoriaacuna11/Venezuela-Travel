import { Component, OnInit } from '@angular/core';
import { DestinationInterface } from 'src/app/Models/destination';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DestinationsService } from 'src/app/services/destinations.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destinations-admin',
  templateUrl: './destinations-admin.component.html',
  styleUrls: ['./destinations-admin.component.scss']
})
export class DestinationsAdminComponent implements OnInit {

  destinations: DestinationInterface[];
  createStateFrom: FormGroup;
  isModify=false;
  d: DestinationInterface;

  constructor(private _builder: FormBuilder, private destinationSV: DestinationsService, private route: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {

    if (this.actRoute.snapshot.paramMap.get('id') == undefined) {

      this.createStateFrom = this._builder.group({
        name: ['', Validators.required],
        bannerImg: ['', Validators.required]
      })
    }else{

      this.isModify=true;
      const id = this.actRoute.snapshot.paramMap.get('id');
      this.d = this.destinationSV.getDestinationById(id);
      this.createStateFrom = this._builder.group({
        name: [this.d.name, Validators.required],
        bannerImg: [this.d.bannerImg, Validators.required]
      })

    }
  }

  addPost() {
    const mov = {
      name: this.createStateFrom.value.name,
      bannerImg: this.createStateFrom.value.bannerImg,
      views: 0,
      visits: 0,
      available: true
    }

    this.destinationSV.addDestination(mov);
    this.route.navigate(['/admin/destinations']);
    // this.route.navigate(['/admin/destinations']);
  }

  updateD(){

    this.d.name=this.createStateFrom.value.name;
    this.d.bannerImg = this.createStateFrom.value.bannerImg;

    this.destinationSV.updateDest(this.d);
    this.route.navigate(['/admin/destinations']);
  }

}
