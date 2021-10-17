import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScooterGuard implements CanActivate {
  constructor (private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        
    const id = +route.params.id;

    if (isNaN(id) || id < 1) {
      console.log(`Wrong params: 'scooters/${id}'`);
      this._router.navigate(['/scooters'], { state: { error: `Invalid parameter: ${route.params.id}!`}});
      return false;
    }

    return true;
  }
  
}
