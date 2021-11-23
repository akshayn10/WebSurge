import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
  providers: [PostService]
})
export class PostCreateComponent implements OnInit {
public createForm;

  constructor(public postService: PostService) {  

}


  ngOnInit(): void {
    this.resetForm();
}

onSubmit(form: NgForm) {
    this.postService.postPost(form.value).subscribe((res) => {
      this.resetForm(form);
      this.getAllPostList();
      // M.toast({ html: 'Saved successfully', classes: 'rounded' });
    });
  }

getAllPostList() {
  this.postService.getPostList().subscribe((res) => {
    this.postService.posts = res as Post[];
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