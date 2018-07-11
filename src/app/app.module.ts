import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RedditService } from './providers/reddit.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpModule, JsonpModule],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule {}
