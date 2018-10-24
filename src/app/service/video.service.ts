import { Router } from '@angular/router';
import { Injectable, Inject /*Inject api config*/ } from '@angular/core';
import { Http, Response, Headers, ResponseContentType, RequestOptionsArgs } from '@angular/http';
import { map } from 'rxjs/operators';
// import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';

@Injectable()
export class VideoService {
  static headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private router: Router, private http: Http) {
  }
  getVideo() {
    return this.http.get(environment.apiurl + '/video').pipe(map(data => data.json()));
  }
  getVideoDetail(id) {
    return this.http.get(environment.apiurl + '/video/' + id).pipe(map(data => data.json()));
  }


  addView(body: any) {
    return this.http.post(environment.apiurl + '/video/', body);
  }
  addLike(body: any) {
    return this.http.post(environment.apiurl + '/video/', body);
  }

}
