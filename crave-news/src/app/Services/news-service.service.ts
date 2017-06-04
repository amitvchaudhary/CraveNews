import { Injectable } from '@angular/core';
import {NewsItem} from './../Modals/news-item';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NewsServiceService 
{

  constructor(private http:Http) { }
getNewsItems(): Observable<NewsItem[]>
{
 // return this.http.get("TECHCRUNCH_MAIN").toPromise().then(response=>response.json().data as NewsItem).catch("");
return this.http.get("http://localhost:54099/news/TIMESOFINDIA_MAIN").map((response:Response)=><NewsItem[]>response.json()).catch((error:any)=>Observable.throw(error.json().error || "Server Error"));

  }
  
}



