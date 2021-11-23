import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Post } from '../models/post.model';
// import { Observable } from 'rxjs/Observable';

@Injectable(
  // {providedIn: 'root'}
  )
export class PostService {

  selectedPost: Post;
  posts: Post[];
  readonly baseURL = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  postPost(pos: Post) {
    return this.http.post(this.baseURL, pos);
  }

  getPostList() {
    return this.http.get(this.baseURL);
  }

  putPost(pos: Post) {
    return this.http.put(this.baseURL + `/${pos._id}`, pos);
  }

  deletePost(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getPostById(_id: string){
  return this.http.get<{
    _id: string,
    author_name:string, 
    title: string, body: string,
    creationDate:Date
  }>(this.baseURL + `/${_id}`);
}
}