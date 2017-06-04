import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';



import { AppComponent } from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { NewsDashboardComponent } from './news-dashboard/news-dashboard.component';
import {NewsServiceService} from './Services/news-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavHeaderComponent,
    NewsDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
