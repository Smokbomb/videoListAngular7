import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/videoList',
    pathMatch: 'full'
  },
  {
    path: 'videoList', component: VideoListComponent,
  },
  {
    path: 'videoDetail/:index', component: VideoDetailComponent ,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
