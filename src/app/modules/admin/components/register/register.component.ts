import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private snack_bar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openSnackBar(message: string) {
    this.snack_bar.open(message);
  }

  onReg(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.authService.signup(email, password).subscribe({
      next: (resData: any) => {
        this.openSnackBar('Successfully registered');
      },
      error: (errorMessage: any) => {
        this.openSnackBar(errorMessage);
      },
    });

    form.reset();
  }
}
