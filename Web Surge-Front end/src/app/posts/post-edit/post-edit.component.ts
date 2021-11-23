import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
  providers: [PostService]
})
export class PostEditComponent implements OnInit {
editForm;
postId: string;
post: Post;
  constructor(public postService: PostService,public router: Router,public route: ActivatedRoute) {
    this.postId = this.route.snapshot.paramMap.get('id');
  }

   
  ngOnInit(): void {
    this.getPost(this.postId);
  }
onSubmit(form: NgForm){
  // this.postService.selectedPost = pos;
  this.postService.putPost(form.value).subscribe((res) => {
    this.resetForm(form);
    // M.toast({ html: 'Updated successfully', classes: 'rounded' });
  });
  this.router.navigate([`/posts`]);
}
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
resetForm(form?: NgForm) {
  if (form)
    form.reset();
  this.postService.selectedPost = {
    _id: "",
    author_name: "",
    title: "",
   body: "",
   creationDate:null
  }
}
}
// onStart(pos) {
//   this.postService.selectedPost = pos;
// }

