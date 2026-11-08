import {
  Component,
  ElementRef,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  flag: InputSignal<boolean> = input(false);
  control: InputSignal<any> = input();
  inputtype: InputSignal<string> = input('');
  inputid: InputSignal<string> = input('');
  inputlabel: InputSignal<string> = input('');
  inputplaceholder: InputSignal<string> = input('');
}
