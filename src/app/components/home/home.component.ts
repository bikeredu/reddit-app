import { Component, OnInit } from '@angular/core';
import { RedditService } from '../../providers/reddit.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  news: any;
  constructor(private _rs: RedditService) {
    this._rs.getNews().subscribe(data => (this.news = data));
  }

}
