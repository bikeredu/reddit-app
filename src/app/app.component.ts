import { Component } from '@angular/core';
import { RedditService } from './providers/reddit.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  news: any;

  constructor(private _rs: RedditService) {
    this._rs.getNews().subscribe(data => (this.news = data));
  }
}
