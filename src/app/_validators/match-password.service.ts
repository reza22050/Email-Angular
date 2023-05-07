import { Injectable } from '@angular/core';
import { AbstractControl, Validator, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MatchPasswordService  implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    //console.log(control);
     const {password, passwordConfirmation} = control.value;
     
     if(password === passwordConfirmation)
      return null;

     return {passwordDoesnotMatch: true};
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }


}
