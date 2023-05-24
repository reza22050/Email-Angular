import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmailDetail } from '../_services/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<EmailDetail> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmailDetail> | EmailDetail {
    return  {subject: 'test', from: 'test@gmail.com', id: "1", to:'test100@gmail.com', html: '<h1>test100</h1>', text:'test100'};

  }
}
