import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpService: HttpService) {
  }

  myPosts;
  getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      // console.log(posts);
      this.myPosts = posts;
    });
  }

  getPost() {
    this.httpService.getPost(1).subscribe(post => {
       console.log(post);
    });
  }

  getPostByUser() { }

  addPost() {
    const post: Post = ({
      userId: 1,
      id: null,
      title: 'Mój post',
      body: 'Pierwszy post o angularze!',
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'nowy wpis',
    });
  }
  deletePost() { }
  changePost() {
    const p: Post = ({
      id: 1,
      body: 'zmieniam tylko wpis',
    });
  }

}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}
