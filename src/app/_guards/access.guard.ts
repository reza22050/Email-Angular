import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, skipWhile, take } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private authService: AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | boolean {
    return this.authService.signedin$.pipe(
      //skipWhile((signedin)=> signedin === null || signedin === false), 
      take(1), 
      map((signedin)=>{
        //console.log(signedin);
        return signedin;
      })
    );
  }
}
