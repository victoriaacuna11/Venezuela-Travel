import { Component, OnInit } from '@angular/core';
import { ReserveInterface } from 'src/app/Models/reserve';
import { ReserveService } from 'src/app/services/reserve.service';

@Component({
  selector: 'app-reserve-list',
  templateUrl: './reserve-list.component.html',
  styleUrls: ['./reserve-list.component.scss']
})
export class ReserveListComponent implements OnInit {

  loadingReserves:boolean;
  reserves:ReserveInterface[];
  reserve: ReserveInterface;
  constructor(private reserveSV: ReserveService) { }

  ngOnInit() {
    this.getReserves();
  }

  getReserves(){
    this.reserveSV.getReserveCollection().subscribe(res=>(this.reserves = res.map(item=>
      {
        const reserve: ReserveInterface = {
          id: item.payload.doc.id,
          ...item.payload.doc.data(),
        }
        this.loadingReserves=false;
        return reserve;
      })
    ))
  }

  setEnabled(id){
    let found=false;
    let cont=0;
    while(!found && cont<this.reserves.length){
      if(this.reserves[cont].id===id){
        found=true;
        this.reserves[cont].available=!this.reserves[cont].available;
        this.reserve = this.reserves[cont];
      }
      cont=cont+1;
    }
    console.log(this.reserve);
    this.reserveSV.updateReserve(this.reserve);
  }

}
