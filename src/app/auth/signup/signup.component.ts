import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPasswordService } from 'src/app/_validators/match-password.service';
import { UniqueUsernameService } from 'src/app/_validators/unique-username.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private matchPassword: MatchPasswordService, private uniqueUsername: UniqueUsernameService){}

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(100)
    ],[this.uniqueUsername.validate.bind(this.uniqueUsername)]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(25)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required, 
      Validators.minLength(4), 
      Validators.maxLength(25)
    ])
  },{
    validators: [this.matchPassword.validate]
  });
  
  onSubmit(){
    //console.log(this.form.value);
  }

get f(){
  //console.log(this.form);
  return this.form;
}

showErrorPasswordDoesnotMatch(){
  return this.form.controls.password.dirty &&
  this.form.controls.password.touched &&
  this.form.controls.passwordConfirmation.dirty &&
  this.form.controls.passwordConfirmation.touched 
}


}
