import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    // Pobieramy wszystkie posty
    getPosts(): Observable<Array<Post>> { // Po dwukropku to, to co będzie zwracane
        return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
    }

    // Pobieramy jeden post podając id
    getPost(id: number): Observable<Post> {
        return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1' + id);
    }


    // Pobieramy wszystkie posty usera podając w parametrze jaego userId
    getPostByUser(userId: number) {
        this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
     }


    // Dodajemy nowy post
    addPost(post: Post) { }


    // Aktualizujemy/Podmieniamy post
    updatePost(post: Post) { }


    // Usuwamy post
    deletePost(id: number) { }


    // Aktualizujemy pola w post
    changePost(post: Post) { }

}
