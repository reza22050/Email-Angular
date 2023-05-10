import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

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


}
