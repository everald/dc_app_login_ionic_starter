import { Component } from '@angular/core';

declare let DocCheckAppLogin: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  exampleFunction() {
    DocCheckAppLogin.openLogin(
        result => {
            // do something on success
            // result['success'] should be '1'
            // result['data'] should hold additional values
            console.log(result);
        },
        result => {
            // do something on failure or cancel
            // result['success'] should be '0'
            console.log(result);
        },
        '1'
    );
}

}
