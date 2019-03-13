import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderService {

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<any> {
    return this.http.get('./assets/menu-items.json');
  }
}
