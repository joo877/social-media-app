import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { initFlowbite, Modal } from 'flowbite';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { PostService } from '../singl-post/services/post.service';
@Component({
  selector: 'app-creatpost',
  imports: [ReactiveFormsModule],
  templateUrl: './creatpost.component.html',
  styleUrl: './creatpost.component.css',
})
export class CreatpostComponent implements OnInit {
  saveFile: WritableSignal<File | string> = signal('');
  content: FormControl = new FormControl(null, [Validators.required]);

  myModel = viewChild<ElementRef>('modal');

  private readonly postService = inject(PostService);

  ngOnInit(): void {
    initFlowbite();
  }

  changeIamge(e: Event) {
    let input = e.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      console.log(input.files[0]);
      this.saveFile.set(input.files[0]);
    }
  }

  submitForm(e: Event) {
    e.preventDefault();

    if (this.content.valid) {
      const formData = new FormData();
      formData.append('body', this.content.value);
      formData.append('image', this.saveFile());

      this.postService.createPost(formData).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            new Modal(this.myModel()?.nativeElement).hide();
          }
        },
      });
    }
  }
}
