import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dests-and-states',
  templateUrl: './dests-and-states.component.html',
  styleUrls: ['./dests-and-states.component.scss']
})
export class DestsAndStatesComponent implements OnInit {
  
  @Input() objs: any[];

  constructor(private route:ActivatedRoute ) { }

  ngOnInit() {
  }

}
