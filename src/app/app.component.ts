import {Component} from '@angular/core';

@Component({
  selector:'pm-root',
  template:`<div> <h2>{{pageTitle}}</h2>
  <pm-products></pm-products>
  </div>`
})
export class AppComponent{
  pageTitle:string ='Acme Product Management';
}