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
        console.log("getNewstories called");
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

    onDeleted(message:string):void
    {
        
          this.getNewsStories();
            
    }


}