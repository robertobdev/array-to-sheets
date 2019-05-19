import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayToFileSheetsService {

  constructor() { }

  headers: Array<string> = [];

  /**
    * @param array Array of datas
    * @param fileName File name
    * @param customHeader Headers
  */
  convert(array: Array<{ any }>, fileName: string, customHeader: any = true) {
    let tableHeader = '<tr>';
    let tableBody = '';
  }


  makeHeader(header: any, customHeader) {
    let tableHeader = '';
    let headerTitle = '';
// tslint:disable-next-line: forin
    for (const key in header) {
      headerTitle = customHeader ? key : header[key];
      tableHeader += `<td> ${headerTitle} </td>`;
      this.headers.push(headerTitle);
    }
    return tableHeader;
  }

  
}
