import { Component } from '@angular/core';
import { ArrayToFileSheetsService } from 'projects/array-to-file-sheets/src/public-api';

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
        b: '22',
        c: '33',
        d: '44',
      },
      {
        a: '11321',
        b: '23212',
        c: '356153',
        d: '46864',
      },
      {
        a: '21311',
        b: '2512',
        c: '32133',
        d: '465214',
      },
      {
        a: '1611',
        b: '26122',
        c: '41233',
        d: '45214',
      }
    ];


    this.arrayToSheets.convert(array, 'testee');
  }
}
