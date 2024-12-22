import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading: boolean = false;
  error: string = '';
  constructor(
    private authService: AuthService,
    private route: Router,
    private snack_bar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  openSnackBar(message: string) {
    this.snack_bar.open(message);
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe({
        next: (resData: any) => {
          this.route.navigate(['/admin']);
          this.isLoading = false;

          this.openSnackBar('Successfully loged in');
        },
        error: (errorMessage: any) => {
          this.openSnackBar(errorMessage);
          this.isLoading = false;
        },
      });
    } else {
      this.authService.signup(email, password).subscribe({
        next: (resData: any) => {
          this.route.navigate(['/admin']);
          this.isLoading = false;
          this.openSnackBar('Successfully registered');
        },
        error: (errorMessage: any) => {
          this.openSnackBar(errorMessage);
          this.isLoading = false;
        },
      });
    }
    form.reset();
  }
}
