import { Component, OnInit } from '@angular/core';
import {Constants} from '../../utils/constants/constants';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
@Component({
  selector: 'app-menu-header-bar',
  templateUrl: './menu-header-bar.component.html',
  styleUrls: ['./menu-header-bar.component.css']
})
export class MenuHeaderBarComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  copyMessage(){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = Constants.API_ENDPOINT;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar(Constants.COPY_ENDPOINT, Constants.CLOSE);
  }

  openSnackBar(message:string, action: string){
    this._snackBar.open(message,action,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 8000,
      panelClass: ['black-snackbar']
    });
  }

}
