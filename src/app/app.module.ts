import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
// Routing
import { APP_ROUTING } from './app.routes';

// Providers
import { RedditService } from './providers/reddit.service';

// Components
import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './components/feed/feed.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { VideoPipe } from './pipes/video.pipe';


@NgModule({
  declarations: [AppComponent, HomeComponent, FeedComponent, BuscarComponent, EscapeHtmlPipe, VideoPipe],
  imports: [BrowserModule, HttpModule, JsonpModule, APP_ROUTING],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule {}
