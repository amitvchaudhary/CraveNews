import {Component,OnInit, ViewChild} from '@angular/core';
import {NewsItem} from './../Modals/news-item';
import {NewsServiceService} from './../Services/news-service.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {ListNewsComponent} from './../list-news/list-news.component';


@Component({
    selector:'app-add-news',
    templateUrl:'./add-news.component.html',
    styleUrls:['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit
{

// Component Variables
newsSources=[];
newsStories:NewsItem[];
newsItem:NewsItem;
newsItemDeletedMessage:string;
errorMessage:string;
isEditNewsItem:boolean;
newsForm:FormGroup;
newsFormValues:any;

//@ViewChild(ListNewsComponent) private listNewsComponent: ListNewsComponent;


onSubmit(newsFormValues:any)
{
    console.log("submit called");
    console.log(newsFormValues);
    this.newsFormValues=newsFormValues;
    this.addNewsStory();
}


    constructor (private newsServiceService: NewsServiceService, private formBuilder: FormBuilder, public snackBar: MdSnackBar){};



    ngOnInit():void{

        
    this.isEditNewsItem=false;
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


this.newsForm.controls['headline'].setValue("default");
      
        this.newsSources=["Tech Crunch","Times of India","News 18"];


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
            this.newsItem.newsItemTechNonTech=this.newsFormValues.techNonTech;
        
 console.log(this.newsItem);


        this.newsServiceService.addNewsItems(this.newsItem).subscribe(
        newsItem=>
        {
           // this.getNewsStories();
            //this.newsStories.push(this.newsItem);
            //this.listNewsComponent.ngOnInit();
        },
        error=>this.errorMessage=<any>error);

    }


    onEditNewsItemForAddNews(newsItemId:number)
    {
        console.log(newsItemId + " selected for edit in Add news component");
    }




}
