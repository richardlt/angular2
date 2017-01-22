import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ItemsPage } from './items/items.page'
import { HomePage } from './home/home.page'

import { ExerciseListComponent } from './../components/exercise-list/exercise-list.component'
import { ExerciseItemComponent } from './../components/exercise-item/exercise-item.component'

import { ItemsService } from './../services/items.service'

const appRoutes: Routes = [{
  path: 'items', component: ItemsPage
}, {
  path: '', component: HomePage
}];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ItemsPage,
    ExerciseListComponent,
    ExerciseItemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
