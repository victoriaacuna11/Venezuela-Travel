import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dests-and-states',
  templateUrl: './dests-and-states.component.html',
  styleUrls: ['./dests-and-states.component.scss']
})
export class DestsAndStatesComponent implements OnInit {
  // @Input() img1?:string;
  // @Input() img2?:string;
  // @Input() img3?:string;
  // @Input() img4?:string;
  // @Input() img5?:string;
  // @Input() img6?:string;
  // @Input() img7?:string;
  // @Input() img8?:string;

  // @Input() obj?: any[];
  @Input() objs: any[];

  constructor(private route:ActivatedRoute ) { }

  ngOnInit() {
  }

}
