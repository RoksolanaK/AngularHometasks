import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/UserModel';
import {Observable} from 'rxjs';
import {PostModel} from '../../models/PostModel';
import {CommentModel} from '../../models/CommentModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable <UserModel[]> {
    return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/users');
  }
  getPosts(): Observable <PostModel[]> {
    return  this.http.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getComments(): Observable <CommentModel[]> {
    return  this.http.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
