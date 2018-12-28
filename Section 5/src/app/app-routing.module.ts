import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { SourcesComponent } from './sources/sources.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'headlines',
    // component: HeadlinesComponent
    loadChildren: './headlines/headlines.module#HeadlinesModule'
  },
  {
    path: 'sources',
    // component: SourcesComponent,
    loadChildren: './sources/sources.module#SourcesModule'
  },
  {
    path: 'favorites',
    // component: FavoritesComponent,
    loadChildren: './favorites/favorites.module#FavoritesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
