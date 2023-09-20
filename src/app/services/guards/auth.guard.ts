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
      if (this.authService.loggedIn.getValue()) {
        return true;
      } else {
        this.router.navigate(['preguntatek']);
        return false;
      }
    }
}
