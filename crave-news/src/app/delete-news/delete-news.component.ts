import {Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import {NewsServiceService} from './../Services/news-service.service';
import {MdSnackBar} from '@angular/material';

@Component({
    selector:'app-delete-news',
    templateUrl:'./delete-news.component.html',
    styleUrls:['./delete-news.component.scss']
})
export class DeleteNewsComponent implements OnInit
{
    @Input() newsItemId: number;
    @Output() onDeleted = new EventEmitter<null>();


    newsItemDeletedMessage: string;
    constructor(private newsServiceService: NewsServiceService, public snackBar: MdSnackBar){};

    ngOnInit():void
    {

    }



    private deleteNewsStory()
    {
        console.log(this.newsItemId + "selected for deletion");
        this.newsServiceService.deleteNewsItem(this.newsItemId)
          .subscribe(newsItem =>
        {
            this.newsItemDeletedMessage=newsItem;
            this.snackBar.open(this.newsItemDeletedMessage,null,{duration:2000,});
          //  this.getNewsStories();
          this.onDeleted.emit();

        },error=>
        {
          //  this.errorMessage=error;
        }
        )    

    }

}