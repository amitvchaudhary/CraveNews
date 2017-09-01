import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'app-edit-news',
    templateUrl:'./edit-news.component.html',
    styleUrls:['./edit-news.component.scss']
})
export class EditNewsComponent implements OnInit
{

@Input() newsItemId: number;
@Output() onEditNewsItemForListNews= new EventEmitter<number>();

    ngOnInit():void{

    }

    public editNewsStory():void
    {
        console.log(this.newsItemId + " editNewstory selected");

        this.onEditNewsItemForListNews.emit(this.newsItemId);
    }

}