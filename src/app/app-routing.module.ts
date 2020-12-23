import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RepositoriesComponent } from './repositories/repositories.component';

const routes: Routes = [ 
	{ path: 'home', component: HomeComponent }, 
  { path: 'repositories', component: RepositoriesComponent }, 
  { path: 'profile/:id/:username', component: ProfileComponent }, 
  { path: 'posts', component: PostsComponent },   
	{ path: '**', component: PageNotFoundComponent }	
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
