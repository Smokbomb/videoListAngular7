import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, Http } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoService } from './service/video.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatVideoModule } from 'mat-video';
import { MatCardModule } from '@angular/material/card';
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from '../environments/environment';

// const config: SocketIoConfig = { url: 'localhost:3000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatGridListModule,
    MatVideoModule,
    MatCardModule,
    // SocketIoModule.forRoot(config),
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

