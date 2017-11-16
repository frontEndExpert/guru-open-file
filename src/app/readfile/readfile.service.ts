import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }	  from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Fileinfo } from './fileinfo';


@Injectable()
export class ReadfileService {
//  http://localhost:8081/read-file/fileName/:fileName/page/:page
  private filebrowserUrl = "http://localhost:8081/read-file";

  constructor(private _http: Http) { }

  getFiles(filename: string, pageno: string): Observable<Fileinfo[]> {
    console.log("fn=" + filename);
    var url = this.filebrowserUrl + "/fileName/" + filename + "/page/" + pageno;  
    //console.log("url="+url);
    return this._http.get(url)
										.map((response: Response) => <Fileinfo[]>response.json())
										.catch(this.handleError);
  } 

  getFile(filename: string, pageno: number) {
    var url = this.filebrowserUrl + "/read-file/" + filename + "/page/" + pageno; 
    return this._http.get(url + '.json');
  }


  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
