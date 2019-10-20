import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Video } from '../types/video.interface';

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {}

  loadVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${environment.baseUrl}/videos`);
  }
}
