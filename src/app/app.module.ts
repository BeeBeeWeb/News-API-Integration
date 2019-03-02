import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import {NewsApiService} from './news-dashboard/news-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
