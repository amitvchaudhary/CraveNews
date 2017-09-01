import { Component, OnInit } from '@angular/core';
import {NewsServiceService} from './../Services/news-service.service';
import {NewsItem} from './../Modals/news-item';


@Component({
  selector: 'app-news-dashboard',
  templateUrl: './news-dashboard.component.html',
  styleUrls: ['./news-dashboard.component.scss']
})
export class NewsDashboardComponent implements OnInit {

newsItems: NewsItem[];
errorMessage:string;

  constructor(private newsServiceService:NewsServiceService) {
      }

  ngOnInit():void {
    this.newsServiceService.getNewsItems()
    .subscribe(
      response => this.newsItems = response,
      error=>this.errorMessage=error
    );

  }

}
