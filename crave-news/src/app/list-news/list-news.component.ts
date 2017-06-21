import {Component, OnInit} from '@angular/core';
import {NewsItem} from './../Modals/news-item';
import {NewsServiceService} from './../Services/news-service.service';
import {MdSnackBar} from '@angular/material';


@Component({
    selector:'app-list-news',
    templateUrl:'./list-news.component.html',
    styleUrls:['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit
{


private newsStories:NewsItem[];
private errorMessage:string;
private newsItemDeletedMessage:string;

    constructor(private newsServiceService:NewsServiceService, private snackBar:MdSnackBar){};

    ngOnInit():void
    {
        this.getNewsStories();
    }

        
    private editNewsStory(newsItemId:number)
    {
            console.log(newsItemId + " to be edited");
    }

    
    private getNewsStories()
    {
        this.newsServiceService.getCustomNewsItems()
        .subscribe(newsStories=>
        {
            this.newsStories=newsStories;
        }
        ,error=>
        {
            this.errorMessage=<any>error;
        })
        
    }

    
    private deleteNewsStory(newsItemId: number)
    {
        console.log(newsItemId + "selected for deletion");
        this.newsServiceService.deleteNewsItem(newsItemId)
          .subscribe(newsItem =>
        {
            this.newsItemDeletedMessage=newsItem;
            this.snackBar.open(this.newsItemDeletedMessage,null,{duration:2000,});
            this.getNewsStories();

        },error=>
        {
            this.errorMessage=error;
        }
        )    

    }


}