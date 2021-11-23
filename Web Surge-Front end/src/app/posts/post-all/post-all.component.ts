import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css'],
  providers: [PostService]
})
export class PostAllComponent implements OnInit {

  constructor(public router: Router,public postService: PostService) { }

  ngOnInit(): void {
  this.getAllPostList();
  }
  getAllPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.posts = res as Post[];
    });
  }
  navigate(id: string) {
    this.router.navigate([`/posts/details/${id}`]);
  }

}
