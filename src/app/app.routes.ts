import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FeedComponent } from './components/feed/feed.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feed/:id', component: FeedComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
