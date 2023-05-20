import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private rootUrl = 'https://api.angular-email.com'
  constructor(private http: HttpClient) { }

  getEmails(){
    return of([ {subject: 'test', from: 'test@gmail.com'},
    {subject: 'info', from: 'info@gmail.com'},
    {subject: 'noreply', from: 'noreply@gmail.com'} ]);
    //return this.http.get(`${this.rootUrl}/emails`)
  }

}
