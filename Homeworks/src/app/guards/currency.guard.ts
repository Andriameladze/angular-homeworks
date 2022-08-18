import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from '../login-user/login-auth.service';

@Injectable({
  providedIn: 'root',
})
export class CurrencyGuard implements CanActivate {
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
}
