import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable, tap } from 'rxjs';


export interface SignupCredentials{
  username: string;
  password: string; 
  passwordConfirmation: string;
}

export interface SignupResponse{
  username: string;
}

export interface LoginResponse{
  username: string;
}


export interface LoginCredentials{
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://api.angular-email.com'
  public signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string){
    return this.http.post<any>(this.baseUrl + '/auth/username', {username: username});
  }

  signup(values: SignupCredentials){
    return this.http.post<SignupResponse>(this.baseUrl + '/auth/signup', values)
    .pipe(
      tap(()=>{
        this.signedin$.next(true);
      })
    );
  }

  checkauth(){
    return this.http.get(`${this.baseUrl}/auth/signedin`/*, {withCredentials: true}*/).pipe(
      tap((response: any)=>{
        this.signedin$.next(response.authenticated);
      })
    );
  }

  Signout(){
    return this.http.post(`${this.baseUrl}/auth/signout`, {}).pipe(
      tap(()=>{
        this.signedin$.next(false);
      })
    );
  }

  Signin(loginCredentials: any){
    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/signin`, loginCredentials).pipe(
      tap(()=>{
        this.signedin$.next(true);
      })
    )
  }


}
