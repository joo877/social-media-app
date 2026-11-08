import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly http = inject(HttpClient);

  createPost(data: object): Observable<any> {
    return this.http.post(environment.baisurl + `posts`, data);
  }

  getAllPost(): Observable<any> {
    return this.http.get(environment.baisurl + `posts?limit=50`);
  }

  getUserPost(userid: string): Observable<any> {
    return this.http.get(environment.baisurl + `users/${userid}/posts?limit=2`);
  }
}
