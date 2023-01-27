import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  @Output() list = new EventEmitter<string>(); //In order to send data from FirstComponent to the AppComponent we used the @Output Decorator
  userInput='';

  //The save() fun takes the user input and assign it into userInput. also it is used to emit(send) the inputValue into the list.
  save(inputValue:any){
    this.userInput=inputValue;
    this.list.emit(inputValue);
  }



}
