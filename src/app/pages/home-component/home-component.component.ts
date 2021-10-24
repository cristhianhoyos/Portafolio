import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
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
