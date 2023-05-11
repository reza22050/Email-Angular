import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private authService: AuthService, private router: Router){}

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(100)
    ]), 
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(25)
    ])
  });

  get f() {
    return this.form;
  }

  showErrorPasswordDoesnotMatch(){
    return this.form.controls.password.dirty &&
    this.form.controls.password.touched &&
    this.form.controls.username.touched &&
    this.form.controls.username.dirty;

  }

  onSubmit(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }

    this.authService.Signin(this.form.value).subscribe((res)=>{
      //console.log(res);
      this.router.navigate(['/inbox']);
    }, (error: any)=>{
      if(!error.status)
        {
          this.form.setErrors({noConnection: true});
          return;
        }
        else if(error.error.username || error.error.password){
          this.form.setErrors({credential: true});
          return;
        }
        else {
          this.form.setErrors({unknownError: true});
        }
    });

  }




}
