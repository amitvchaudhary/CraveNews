import {Component,OnInit} from '@angular/core';
import {NewsItem} from './../Modals/news-item';
import {NewsServiceService} from './../Services/news-service.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


@Component({
    selector:'app-add-news',
    templateUrl:'./add-news.component.html',
    styleUrls:['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit
{
newsSources=[];

newsStories:NewsItem[];

// headline:string;
// description:string;
// imageSrc:string;
// selectedNewsSource:string;
// techNonTech:string;
//newsLink:string;
newsItem:NewsItem;
newsItemDeletedMessage:string;
errorMessage:string;



newsForm:FormGroup;
newsFormValues:any;

onSubmit(newsFormValues:any)
{
    this.newsFormValues=newsFormValues;
    this.addNewsStory();
}


    constructor (private newsServiceService: NewsServiceService, private formBuilder: FormBuilder){};



    ngOnInit():void{

        this.newsForm=this.formBuilder.group(
            {
                headline:[null,[Validators.required, Validators.maxLength(50)]],
                description:[null,Validators.required],
                imageSrc:[],
                newsLink:[],
                selectedNewsSource:[],
                techNonTech:[]
            }
        );


      
        this.newsSources=["Tech Crunch","Times of India","News 18"];
//this.newsStories = [{newsItemId:0,newsItemHeadline:"",newsItemDescription:"",newsItemImageSrc:"",newsItemLink:"",newsItemPubDate:"",newsItemSource:""}];
    }


    private deleteNewsStory(newsItemId: number)
    {
        console.log(newsItemId + "selected for deletion");
        this.newsServiceService.deleteNewsItem(newsItemId)
          .subscribe(newsItem =>
        {
            this.newsItemDeletedMessage=newsItem;
            this.getNewsStories();

        },error=>
        {
            this.errorMessage=error;
        }
        )    

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


    private addNewsStory()
    {
    
       
            this.newsItem = new NewsItem();
            this.newsItem.newsItemHeadline=this.newsFormValues.headline;
            this.newsItem.newsItemDescription=this.newsFormValues.description;
            this.newsItem.newsItemImageSrc=this.newsFormValues.imageSrc;
            this.newsItem.newsItemLink=this.newsFormValues.newsLink;
            this.newsItem.newsItemPubDate=new Date().toString();
            this.newsItem.newsItemSource=this.newsFormValues.selectedNewsSource;
        
 console.log(this.newsItem);


        this.newsServiceService.addNewsItems(this.newsItem).subscribe(
        newsItem=>
        {
            this.getNewsStories();
            //this.newsStories.push(this.newsItem);
        },
        error=>this.errorMessage=<any>error);

    }
}
