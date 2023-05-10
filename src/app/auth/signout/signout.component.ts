import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router){}
  
  ngOnInit(): void {
    this.authService.Signout()
    .pipe(delay(3000))
    .subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

  

}
