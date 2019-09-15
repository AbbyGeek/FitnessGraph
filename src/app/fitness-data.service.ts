import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FitnessDataService {

  constructor(private _htttp: HttpClient) { }

  fitnessData(){
    return this._htttp.get("https://spreadsheets.google.com/feeds/list/1mHdmP6MdLix6Hqm6wimyul9Wo6O6W4DRZr-HHNOEONA/od6/public/basic?alt=json")
      .pipe(map(result => result));  

  }
}
