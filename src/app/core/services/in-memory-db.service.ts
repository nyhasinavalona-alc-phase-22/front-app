import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Video } from 'src/app/features/gallery/types/video.interface';
import { User } from '../../features/access-management/types/user.interface';

@Injectable()
export class InMemoryDBService implements InMemoryDbService {
  createDb(): {} {
    const users: User[] = [
      {
        id: 1,
        userName: 'nyhasinavalona',
        password: 'password',
      },
    ];
    const videos: Video[] = [
      {
        id: 1,
        title: 'Spider-man: Homecoming',
        poster: 'homecoming.png',
        yearOfProduction: 2017,
        rated: 4,
        synopsis: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. `,
        views: 46848984,
        pined: false,
      },
      {
        id: 2,
        title: 'Spider-man: Far from home',
        poster: 'far-from-home.png',
        yearOfProduction: 2019,
        rated: 5,
        synopsis: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. `,
        views: 46548984,
        pined: false,
      },
    ];
    return { users, videos };
  }
}
