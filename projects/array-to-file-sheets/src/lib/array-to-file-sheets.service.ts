import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

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
    * @param customHeader Custom Header
  */
  //TODO: make format dinamic
  convert(array: Array<{ any }>, fileName: string, customHeader: any = true) {
    const header = this.makeHeader(array, customHeader);
    const body = this.makeBody(array);

    const date = new Date();
    const data = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    const hora = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    const fileNameDate = fileName + '_' + date.getDate() + '_' + (date.getMonth() + 1) + '_' + date.getFullYear();

    const structure = `<html>
                        <head>
                          <title>XSLX</title>
                        <head>
                        <body>
                          <table>
                          <tr><td colspan="3"><strong>Gerado em: ${data} ${hora}</strong></td></tr>
                          <tr></tr>
                          <tr></tr>
                          <tr></tr>
                          <thead>${header}</thead>
                          <tbody>${body}</tbody>
                          </table>
                        </body>
                      </html>`;

    const file = new File([structure], fileNameDate + '.xls', { type: 'text/plain;charset=utf-8' });
    saveAs(file);
  }


  makeHeader(header: any, customHeader) {

    header = customHeader ? customHeader : header[0];
    let tableHeader = this.OPENTABLEROWTAG;
    let headerTitle = '';
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
