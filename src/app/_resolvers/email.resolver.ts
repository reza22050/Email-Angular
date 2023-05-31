import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { EmailDetail, EmailService } from '../_services/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<EmailDetail> {

constructor(private emailService: EmailService, private router: Router){}


  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<EmailDetail>{
    const id = route.params['id'];

     return this.emailService.getEmail(id).pipe(
      catchError((err)=>{
        this.router.navigateByUrl('/index/not-found');
        return EMPTY;
      })
     );
    //    console.log(route.params['id']);

    //return  {subject: 'test', from: 'test@gmail.com', id: "1", to:'test100@gmail.com', html: '<h1>test100</h1>', text:'test100'};

  }
}
