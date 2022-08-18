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
import { LoginAuthService } from 'src/app/shared/services/login-auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginAccessGuard implements CanActivate, CanLoad {
  constructor(private loginService: LoginAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.loginService.loggedIn()) {
      this.router.navigate(['/users']);
      return false;
    } else {
      return true;
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
    if (this.loginService.loggedIn()) {
      this.router.navigate(['/users']);
      return false;
    } else {
      return true;
    }
  }
}
