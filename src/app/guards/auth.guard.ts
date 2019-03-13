import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
      console.log("from guard");
    if (this.authService.isLoggenIn.getValue()) {
      
      return true;
    } else {
      return this.router.navigate(['auth']).then(()=>false)
    }
  }
}
