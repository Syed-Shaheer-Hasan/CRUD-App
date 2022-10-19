import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud App';
  constructor(private dialog :MatDialog){}
  openPopup(){
    this.dialog.open(CreateComponent)
  }
}
