import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  validate_control(control: AbstractControl | null){
    if (control?.touched && control?.invalid)
      return 'invalid';
    if (control?.touched && control?.valid)
      return 'valid'
    else return 'unknown'
  }

  get email(){
    return this.form.get("email");
  }

  get password(){
    return this.form.get("password");
  }


}
