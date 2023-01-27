import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:string[]=[]; //items is the array of string values that are collected from the child component (First Component)

  //addItem function simply adds new items to the items array.
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
