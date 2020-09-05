import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloword',
  templateUrl: './helloword.component.html',
  styleUrls: ['./helloword.component.scss']
})
export class HellowordComponent implements OnInit {


  title = "Hello World";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.title = "Hello New World";
  }

}
