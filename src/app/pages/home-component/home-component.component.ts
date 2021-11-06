import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  changeView(page:string){
      var element = document.getElementById(page);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  

}
