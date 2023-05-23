import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/_services/email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.css']
})
export class EmailIndexComponent implements OnInit {
  
  emails: any = [
    // {subject: 'test', from: 'test@gmail.com'},
    // {subject: 'info', from: 'info@gmail.com'},
    // {subject: 'noreply', from: 'noreply@gmail.com'} 
  ];
  constructor(private emailService: EmailService){}
  
  ngOnInit(): void {
    this.emailService.getEmails().subscribe((data)=>{
      //console.log(data);
    this.emails = data;
    });

  }



}
