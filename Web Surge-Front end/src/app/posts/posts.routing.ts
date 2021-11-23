import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostAllComponent } from './post-all/post-all.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthGuard } from '../guard/auth.guard';

const postRoutes: Routes = [
  { path: '', component: PostAllComponent },
  { path: 'create', component: PostCreateComponent,
  canActivate: [AuthGuard] },
 
  { path: 'details/:id', component: PostDetailsComponent },
  { path: 'edit/:id', component: PostEditComponent, canActivate: [AuthGuard] }
  
];

@NgModule({
  imports: [RouterModule.forChild(postRoutes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
