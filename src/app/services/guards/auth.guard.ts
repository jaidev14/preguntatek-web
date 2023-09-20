import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

    constructor (
        private router: Router,
        private authService: AuthService,
    ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const authenticated = this.authService.user.uid !== undefined;
      if (authenticated) {
        return true;
      } else {
        return false;
      }
    }
}
