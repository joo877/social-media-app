import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly http = inject(HttpClient);

  commentCreate(data: object): Observable<any> {
    return this.http.post(environment.baisurl + `comments`, data);
  }

  getPostComments(postid: string): Observable<any> {
    return this.http.get(environment.baisurl + `posts/${postid}/comments`);
  }
}
