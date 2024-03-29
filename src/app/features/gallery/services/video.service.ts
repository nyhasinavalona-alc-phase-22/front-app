import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Video } from '../types/video.interface';

@Injectable()
export class VideoService {
  constructor(private http: HttpClient) {}

  loadVideos(filters: object): Observable<Video[]> {
    return this.http.get<Video[]>(`${environment.baseUrl}/videos`, {
      params: { ...filters },
    });
  }

  loadVideo(id: number | string): Observable<Video> {
    return this.http.get<Video>(`${environment.baseUrl}/videos/${id}`);
  }

  updateVideo(video: Video): Observable<Video> {
    return this.http.put<Video>(
      `${environment.baseUrl}/videos/${video.id}`,
      video,
    );
  }
}
