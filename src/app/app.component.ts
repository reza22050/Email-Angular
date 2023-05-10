import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmailProject';

  constructor(private authService: AuthService) {
    this.authService.checkauth().subscribe((response)=>{
    //console.log(response);
    });

  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.authService.Signout().subscribe((response)=>{
    //     console.log(response);
    //   });
    // }, 5000);
  }

}
