import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../services/user.service';
import { InputComponent } from '../../../shared/components/input/input.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  register!: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.register = this.fb.group(
      {
        name: [null, [Validators.required]],
        email: [null, [Validators.required, Validators.email]],
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
          ],
        ],
        rePassword: [null, [Validators.required]],
        dateOfBirth: [null, [Validators.required]],
        gender: [null],
      },
      { validators: [this.confaeimPassword] }
    );
  }

  confaeimPassword(group: FormGroup) {
    if (group.get('password')?.value === group.get('rePassword')?.value) {
      return null;
    } else {
      group.get('rePassword')?.setErrors({ notMatch: true });
      return { notMatch: true };
    }
  }

  submitform(): void {
    if (this.register.valid) {
      this.userService.signup(this.register.value).subscribe({
        next: (res) => {
          if (res.message === 'success') {
            this.router.navigate(['/signin']);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }
  }
}
