import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http
      .get<any>(`${environment.BASE_URL}/todos`)
      .pipe(shareReplay(1));
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`${environment.BASE_URL}/posts`)
      .pipe(delay(5000));
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.BASE_URL}/posts/${id}`);
  }
}
