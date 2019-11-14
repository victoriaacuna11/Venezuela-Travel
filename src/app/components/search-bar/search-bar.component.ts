import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  Input = false;
  search= '';
  @Output() messageEvent = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  showInput(){
    this.Input = !this.Input;
  }

  sendMessage(){
    this.messageEvent.emit(this.search);
  }

}
