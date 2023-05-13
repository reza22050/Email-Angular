import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private rootUrl = 'https://api.angular-email.com'
  constructor(private http: HttpClient) { }

  getEmails(){
    return this.http.get(`${this.rootUrl}/emails`)
  }

}
