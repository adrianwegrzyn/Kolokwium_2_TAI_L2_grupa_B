import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AW25052019Service {

  private url = 'https://kol2tai.herokuapp.com/api/shop/items';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url);
  }


}
