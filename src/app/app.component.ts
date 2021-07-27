import { Component } from '@angular/core';
import {StateService} from "./state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ten';
  datas: any = [];
  data2: any;
  // @ts-ignore
  capital : any[];
  constructor(private stateservice:StateService) {
    this.stateservice.getAll().subscribe(data => {
      this.datas = data;
      console.log(data);
    });
  }
  // onSelect(name:string) {
  //   return
  // }
}
