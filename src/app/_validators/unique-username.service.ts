import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, filter, map } from 'rxjs/operators';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueUsernameService implements AsyncValidator{
  private baseUrl = 'https://api.angular-email.com'
  constructor(private authService: AuthService) { }

validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors | null> {
return this.authService.usernameAvailable(control.value)
.pipe(
    filter((response) => response.available),
    map((response)=>{
      return null;
    }),
    catchError((err) => {
      //console.log(err);
      if(err.error.username){
        return of({nonUniqueUsername: true});
      }
      else{
        return of({unknownError: true});
      }
    })
  );
}


}
