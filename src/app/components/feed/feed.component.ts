import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedditService } from '../../providers/reddit.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styles: []
})
export class FeedComponent implements OnInit {
  feed: any;
  comments: any;
  regresarA = '';
  busqueda = '';
  constructor(public _ps: RedditService,
    public route: ActivatedRoute) {
      this.route.params.subscribe( parametros => {
        console.log(parametros);
        this.regresarA = parametros['pag'];
        if ( parametros['busqueda']) {
          this.busqueda = parametros['busqueda'];
        }
        this._ps.getFeed( parametros['id'] )
            .subscribe( feed => {
              this.feed = feed[0].data.children[0].data;
              this.comments = feed[1].data.children;
              console.log(feed[0].data.children[0].data);
            });
      });
     }

  ngOnInit() {
  }

}
