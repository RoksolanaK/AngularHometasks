import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/UserModel';
import {UserService} from './Services/user.service';
import {PostModel} from '../models/PostModel';
import {CommentModel} from '../models/CommentModel';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'AngularHometaskOne';
  message = 'Users';
  users: UserModel[];
  posts: PostModel[];
  comments: CommentModel[];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(value => this.users = value);
    this.userService.getPosts().subscribe(value => this.posts = value);
    this.userService.getComments().subscribe(value => this.comments = value);
  }


}
