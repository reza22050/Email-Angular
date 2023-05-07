import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() label ="";
  @Input() control: any;  //FormControl
  @Input() type = 'text';
  @Input() placeholder ='';

  showErrors(){
    //console.log(this.control.errors['required']);
    //console.log(this.control);
    const {errors, dirty, touched} = this.control;
    return errors && touched;
  }
}
