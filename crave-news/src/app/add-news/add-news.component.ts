import {Component,OnInit, ViewChild} from '@angular/core';
import {NewsItem} from './../Modals/news-item';
import {NewsServiceService} from './../Services/news-service.service';
import {FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {ListNewsComponent} from './../list-news/list-news.component';
import {DaoNewsItem} from './../DAO/daoNewsItem';


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
    
    this.newsFormValues=newsFormValues;
    
            this.newsItem = new NewsItem();
            this.newsItem.newsItemId=this.newsFormValues.id;
            this.newsItem.newsItemHeadline=this.newsFormValues.headline;
            this.newsItem.newsItemDescription=this.newsFormValues.description;
            this.newsItem.newsItemImageSrc=this.newsFormValues.imageSrc;
            this.newsItem.newsItemLink=this.newsFormValues.newsLink;
            this.newsItem.newsItemPubDate=new Date().toString();
            this.newsItem.newsItemSource=this.newsFormValues.selectedNewsSource;
            this.newsItem.newsItemTechNonTech=this.newsFormValues.techNonTech;
       
    if (this.isEditNewsItem==false)
    {
        this.addNewsStory(this.newsItem);
    }
    else
    {
        this.editNewsStory(this.newsItem);
        
    }

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
                techNonTech:[],
                id:[]
                
            }
        );


//this.newsForm.controls['headline'].setValue("default");
      
        this.newsSources=["Tech Crunch","Times of India","News 18"];


    }



    private editNewsStory(newsItem:NewsItem)
    {
        console.log("edited news item");
        
        console.log(newsItem.newsItemId);

    }





    private addNewsStory(newsItem:NewsItem)
    {
    
        
        console.log(newsItem);


        this.newsServiceService.addNewsItem(newsItem).subscribe(
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
        this.newsServiceService.getNewsItemById(newsItemId)
        .subscribe
        (
            newsItem => 
            {
                this.newsItem=newsItem;

                if (this.newsItem != undefined || this.newsItem !=null)
                {

                    console.log("inside edittt");
                    this.isEditNewsItem=true;
                    (<FormGroup>this.newsForm).setValue(this.convertToDaoNewsItem(newsItem),{onlySelf:true});
            
                }

                
            }, 
            error => this.errorMessage=<any>error
        )   
    }


    convertToDaoNewsItem(newsItem:NewsItem): DaoNewsItem
    {
        let daoNewsItem = new DaoNewsItem();
        daoNewsItem.id=newsItem.newsItemId;
        daoNewsItem.headline=newsItem.newsItemHeadline;
        daoNewsItem.description=newsItem.newsItemDescription;
        daoNewsItem.imageSrc=newsItem.newsItemImageSrc;
        daoNewsItem.newsLink=newsItem.newsItemLink;
        daoNewsItem.selectedNewsSource=newsItem.newsItemSource;
        daoNewsItem.techNonTech=newsItem.newsItemTechNonTech;
                    
        return daoNewsItem;
    }


}
