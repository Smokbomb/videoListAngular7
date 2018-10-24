import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from '../service/video.service';
// import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  public index: String = '';
  public videoDetail: any = '';
  public view: Number = 0;
  public like: Number = 0;
  constructor(private route: ActivatedRoute, private router: Router, private videoService: VideoService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });

    this.videoService.addView({ id: this.index, scort: '1', view: '1' }).subscribe(data => {
      this.videoService.getVideoDetail(this.index).subscribe(datas => {
        this.videoDetail = datas;
        this.view = datas[0].view;
        this.like = datas[0].like;
        console.log(this.videoDetail[0]);
      });
    });
  }



  addLike() {
    this.videoService.addLike({ id: this.index, scort: '1', like: '1' }).subscribe(e => {
      this.videoService.getVideoDetail(this.index).subscribe(data => {
        this.like = data[0].like;
      });
    });

  }


}
