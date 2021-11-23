import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentEditComponent } from '../../comments/comment-edit/comment-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [PostService]
})
export class PostDetailsComponent implements OnInit {
   postId: string;
   post: Post;
 public subscription$: Subscription;
  constructor(public dialog: MatDialog,public router: Router,public route: ActivatedRoute,public postService: PostService,public _authService:AuthService) { 
    this.postId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void { 
    this.getPost(this.postId);
   }
  openEditCommentDialog (): void {
    const dialogRef = this.dialog.open(CommentEditComponent, {
      width: '600px',
      height: '300px',
    });}
    getPost(_id:string){
      this.postService.getPostById(this.postId).subscribe(resp => {
        this.post = {
          _id: resp._id,
          author_name: resp.author_name,
          title: resp.title,
          body: resp.body,
          creationDate:resp.creationDate,
        };
      });
    }
  
    onDelete(_id: string) {
      if (confirm('Are you sure to delete this record ?') == true) {
        this.postService.deletePost(this.postId).subscribe((res) => {
        });
        this.router.navigate([`/posts`]);
      }
    }

}

