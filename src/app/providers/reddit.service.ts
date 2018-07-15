import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class RedditService {
  private urlReddit = 'https://www.reddit.com/';

  peliculas: any[] = [];

  constructor(private jsonp: Jsonp) {
    console.log('servicio  listo');
  }

  getNews() {

    const url = `${this.urlReddit}r/original.json?jsonp=JSONP_CALLBACK`;

    return this.jsonp.get(url)
      .pipe(map(res => {
        console.log(res.json().data.children);
        return res.json().data.children;
      }));
  }

  getFeed( id: String) {

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlReddit}r/original/comments/${ id }.json?jsonp=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .pipe( map( res => {
                  console.log(res.json());
                  return res.json();
                }));
  }

}
