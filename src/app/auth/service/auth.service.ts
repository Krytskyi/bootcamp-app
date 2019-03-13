import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { DEFAULT_USERS } from '../defaul-users';
import { timeout, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  defaultUsers = DEFAULT_USERS;

  isLoggenIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  login(credentials: { username: string, password: string }): Observable<any> {
    const loggedInUser = this.defaultUsers.find(user => user.username === credentials.username
      && user.password === credentials.password);

    return of(loggedInUser).pipe(
      timeout(500),
      map((response) => {
          if(response) {
            sessionStorage.setItem('user', JSON.stringify(loggedInUser));
            this.setIsLoggedIn(true);
          }
          return response;
      })
    )
  }

  setIsLoggedIn(loggedIn: boolean){
    this.isLoggenIn.next(!!loggedIn);
  }

  initUser(): void {
    if(sessionStorage.getItem('user'))
      this.isLoggenIn.next(true);
  }

  isAdmin(): boolean{
    const user = this.getUser();
    return user && user.role === 'admin';
  }

  getUser(): any {
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
