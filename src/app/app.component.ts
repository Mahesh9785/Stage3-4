import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title="Practice for pipes";

  date=new Date;

  person={
    name:'Mahesh',
    age:20
  }

  items:string[]=[]; //items is the array of string values that are collected from the child component (First Component)

  //addItem function simply adds new items to the items array.
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
