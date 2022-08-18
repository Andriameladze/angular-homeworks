import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from 'src/app/login-user/login-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyGuard implements CanActivate, CanLoad {
  constructor(private loginAuth: LoginAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginAuth.currency()) {
      return true;
    } else {
      return false;
    }
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.loginAuth.currency()) {
      return true;
    } else {
      return false;
    }
  }
}
