import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router'
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
loginForm
  constructor(public fb: FormBuilder,public dialogRef: MatDialogRef<LoginComponent>,private _auth: AuthService,
    private _router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
   }

  ngOnInit(): void {

  }
  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  loginUser() {
    const form = this.loginForm.value;
    const loginModel = new LoginModel(form.email, form.password);
    this._auth.loginUser(loginModel)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/home']);
        this.onNoClick();
      },
      err => console.log(err) 
    ) 
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
