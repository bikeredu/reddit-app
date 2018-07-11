import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class RedditService {
  private urlReddit = 'https://www.reddit.com/r';

  peliculas: any[] = [];

  constructor(private jsonp: Jsonp) {
    console.log('servicio  listo');
  }

  getNews() {

    const url = `${this.urlReddit}/subreddit.json?jsonp=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(res => {
        console.log(res.json().data.children);
        return res.json().data.children;
      }));
  }

}
