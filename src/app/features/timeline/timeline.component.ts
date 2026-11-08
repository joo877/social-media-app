import { Component } from '@angular/core';
import { SinglPostComponent } from '../../shared/components/singl-post/singl-post.component';
import { CreatpostComponent } from '../../shared/components/creatpost/creatpost.component';

@Component({
  selector: 'app-timeline',
  imports: [CreatpostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent {}
