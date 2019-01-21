/*list.service.ts*/
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { List } from '../models/List';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

    constructor(private http: HttpHeaders) { }

    private serverApi= 'http://localhost:3000';

    public getAllLists():Observable<List[]> {

      let URI = `${this.serverApi}/userlist/`;
      return this.http.get(URI)
          .map(res => <List[]>res.lists);
  }
 

    public deleteList(listId : string) {
      let URI = `${this.serverApi}/userlist/${listId}`;
        let headers = new Headers;
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URI, {headers})
        .map(res => res.json());
    }
}
