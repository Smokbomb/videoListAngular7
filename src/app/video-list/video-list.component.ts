import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  constructor(
    private videoService: VideoService,
     private router: Router, private route: ActivatedRoute) { }
  public videoList: any;
  ngOnInit() {
    this.videoService.getVideo().subscribe(data => {
      this.videoList = data.sort(function (obj1, obj2) {
        // Ascending: first age less than the previous
        return obj2.score - obj1.score;
      });
    });

  }
}
