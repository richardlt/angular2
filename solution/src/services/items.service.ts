import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import {Observable} from "rxjs/Observable"

import { Item } from "./../models/item.model"

@Injectable()
export class ItemsService {
  constructor(private http: Http) { }

  getItems() {
    return this.http.get('api/items.json')
      .map((response: Response) => <Item[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || 'server error');
  }
}