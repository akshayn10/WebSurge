import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RegisterModel } from '../models/register.model';
import { Router } from '@angular/router'
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {
registerForm
  constructor(public fb: FormBuilder,public dialogRef: MatDialogRef<SignupComponent>,private _auth: AuthService,
    private _router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required,]]
      // compareValidator('password')
    });
   }
   get email() { return this.registerForm.get('email'); }
   get password() { return this.registerForm.get('password'); }
   get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  registerUser() {
    const form = this.registerForm.value;
    const registerModel = new RegisterModel(form.email, form.password);
    this._auth.registerUser(registerModel)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home']);
        this.onNoClick();
      },
      err => console.log(err)
    )      
  }


}
