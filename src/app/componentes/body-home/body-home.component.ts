import { Component, NgZone, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { HomeComponentComponent} from '../../pages/home-component/home-component.component';

@Component({
  selector: 'app-body-home',
  templateUrl: './body-home.component.html',
  styleUrls: ['./body-home.component.css']
})
export class BodyHomeComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _snackBar: MatSnackBar,
    private zone:NgZone,
    private home:HomeComponentComponent) { }

  ngOnInit(): void {
  }

  openSnackBar(message:string, action: string){
    const config = new MatSnackBarConfig();
    config.panelClass = ['black-snackbar'];
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    this.zone.run(()=>{
      this._snackBar.open(message,action,config
        /*{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 8000,
        panelClass: ['black-snackbar']
      }*/
      );
    });
  }

  changePage(page:string){
      this.home.changeView(page);
  }

}
