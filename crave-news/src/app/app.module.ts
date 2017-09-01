import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';



import {AppComponent } from './app.component';
import {NavHeaderComponent } from './nav-header/nav-header.component';
import {NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import {AddNewsComponent} from './add-news/add-news.component';
import {ListNewsComponent} from './list-news/list-news.component';
import {DeleteNewsComponent} from './delete-news/delete-news.component';
import {EditNewsComponent} from './edit-news/edit-news.component';
import {LoginComponent} from './login/login.component';

import {AppRoutingModule} from './app-routing.module';

import {NewsServiceService} from './Services/news-service.service';
import {AuthService} from './auth0/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NewsDashboardComponent,
    AddNewsComponent,
    ListNewsComponent,
    DeleteNewsComponent,
    EditNewsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [NewsServiceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
