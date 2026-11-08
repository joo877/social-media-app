import { Component, inject, OnInit } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ɵInternalFormsSharedModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-change-password',
  imports: [InputComponent, ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly userService = inject(UserService);
  changpasswordForm!: FormGroup;

  ngOnInit(): void {
    this.initChangpasswordForm();
  }

  initChangpasswordForm(): void {
    this.changpasswordForm = this.fb.group(
      {
        password: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
          ],
        ],

        newPassword: [
          null,
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
            ),
          ],
        ],
      },
      { validators: this.checkNewPassword }
    );
  }

  checkNewPassword(group: FormGroup) {
    if (group.get('password')?.value === group.get('newPassword')?.value) {
      group.get('newPassword')?.setErrors({ samepassword: true });
      return { samepassword: true };
    } else {
      return null;
    }
  }

  resetPassword(): void {
    console.log(this.changpasswordForm.value);

    if (this.changpasswordForm.valid) {
      this.userService.changePassword(this.changpasswordForm.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
