import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminModule } from './admin/admin.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},

  { path: 'about', component: AboutComponent },

  { path: 'doctor', component: DoctorComponent },

  { path: 'admin', loadChildren: () => AdminModule},

  { path: 'home', component: HomeComponent },

  { path: 'posts', loadChildren: () => PostsModule },

  { path: 'comments', loadChildren: () => CommentsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}