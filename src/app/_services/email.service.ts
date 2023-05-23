import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface EmailDetail{
  id: string;
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
}


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private rootUrl = 'https://api.angular-email.com'
  constructor(private http: HttpClient) { }

  private emails = [ 
  {subject: 'test', from: 'test@gmail.com', id: 1, to:'test100@gmail.com', html: '<h1>test100</h1>', text:'test100'},
  {subject: 'info', from: 'info@gmail.com', id: 2, to:'test200@gmail.com', html: '<h1>test200</h1>', text:'test200'},
  {subject: 'noreply', from: 'noreply@gmail.com', id: 3, to:'test300@gmail.com', html: '<h1>test300</h1>', text:'test300'} ];


  getEmails(){
    return of(this.emails);
    //return this.http.get(`${this.rootUrl}/emails`)
  }


  getEmail(id: number){
    const email = this.emails.find(x=>x.id == id);
    return of(email);
    //  return this.http.get<EmailDetail>(`${this.rootUrl}/emails/${id}`);
  }
}
