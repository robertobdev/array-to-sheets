import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayToFileSheetsService {

  constructor() { }

  headers: Array<string> = [];
  OPENTABLEROWTAG = '<tr>';
  CLOSETABLEROWTAG = '</tr>';

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
    let tableHeader = this.OPENTABLEROWTAG;
    let headerTitle = '';
// tslint:disable-next-line: forin
    for (const key in header) {
      headerTitle = customHeader ? key : header[key];
      tableHeader += `<td> ${headerTitle} </td>`;
      this.headers.push(headerTitle);
    }
    return tableHeader += this.CLOSETABLEROWTAG;
  }

  makeBody(body: Array<{ any }>) {
    let tableBody = '';
    for (const value of body) {
      let tableBodyRow = this.OPENTABLEROWTAG;
      for (const header of this.headers) {
        const data = value[header] ? value[header] : '';
        tableBodyRow += `<td> ${data} </td>`;
      }
      tableBodyRow += this.CLOSETABLEROWTAG;
      tableBody += tableBodyRow;
    }
    return tableBody;
  }
}
