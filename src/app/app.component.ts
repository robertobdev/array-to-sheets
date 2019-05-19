import { Component } from '@angular/core';

import { ArrayToFileSheetsService } from 'dist/array-to-file-sheets';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arrayToFileSheets';
  constructor(private arrayToSheets : ArrayToFileSheetsService) { }
  makeXls() {

    const array: Array<any> = [
      {
        a: '11',
        b: '123',
        d: '44',
      },
      {
        a: '11321',
        b: '23212',
        c: '356153',
        d: '46864',
        e: '9999999999'
      },
      {
        a: '21311',
        c: '32133',
        d: '465214',
      },
      {
        a: '1611',
        b: '26122',
        c: '41233',
        d: '45214',
        e: '9999999999'
      }
    ];


    this.arrayToSheets.convert(array, 'testee');
  }
}
