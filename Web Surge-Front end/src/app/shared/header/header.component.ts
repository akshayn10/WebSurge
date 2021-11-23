import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
import { SignupComponent } from '../../signup/signup.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthService]
})

export class HeaderComponent implements OnInit  {

  constructor(public dialog: MatDialog,public _authService: AuthService) { }
   ngOnInit() {
 }

  openLoginDialog (): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });}
  

  openSignupDialog (): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '600px',
      height: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
   }

}
