import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: [
        '', 
        [
          Validators.required,
          Validators.minLength(3), // Minimum length of 3 characters
          Validators.pattern('^[a-zA-Z0-9_]+$') // Only allow letters, numbers, and underscores
        ]
      ],
      password: [
        '', 
        [
          Validators.required,
          Validators.minLength(8), // Minimum length of 8 characters
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})') // At least one lowercase, one uppercase, one number, one special character
        ]
      ],
    });
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // Stop if the form is invalid
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }

    this.loading = true;

    // Simulate a login request (replace with actual authentication logic)
    setTimeout(() => {
      if (this.f['username'].value === 'admin' && this.f['password'].value === 'Password123!') {
        this.router.navigate(['/']); // Navigate to home on successful login
      } else {
        this.error = 'Invalid username or password';

        // Trigger the shake effect
        const button = document.querySelector('.btn') as HTMLElement;
        button.classList.add('shake');

        // Remove the shake class after the animation completes
        setTimeout(() => {
          button.classList.remove('shake');
        }, 500);

        this.loading = false;
      }
    }, 1000);
  }
}
