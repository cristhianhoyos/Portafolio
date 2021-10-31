import { Component, OnInit } from '@angular/core';
import {Constants} from '../../utils/constants/constants';
import {BodyHomeComponent} from'../body-home/body-home.component';
@Component({
  selector: 'app-menu-header-bar',
  templateUrl: './menu-header-bar.component.html',
  styleUrls: ['./menu-header-bar.component.css']
})
export class MenuHeaderBarComponent implements OnInit {

  constructor(
    private Body : BodyHomeComponent
  ) {}

  ngOnInit(): void {
  }

  buildMessage(indice:number){
    let text:string='';
    let message:string='';
    switch(indice){
      case 0: 
        text = Constants.API_ENDPOINT;
        message = Constants.COPY_ENDPOINT;
      break;
      case 1:
        text = Constants.SEND_EMAIL;
        message = Constants.COPY_EMAIL;
      break;
      default:
        text = Constants.ENDPOINT_LINKEDIN;
        message = Constants.COPY_LINKEDIN;
      break;  
    }
    this.copyMessage(text,message);
  }
  

  copyMessage(text:string,message:string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = text;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.Body.openSnackBar(message, Constants.CLOSE);
  }

}
