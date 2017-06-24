import { Injectable } from '@angular/core';
import {NewsItem} from './../Modals/news-item';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsServiceService 
{

  constructor(private http:Http) { }


getNewsItems(): Observable<NewsItem[]>
{
      return this.http.get("http://localhost:54099/news/TIMESOFINDIA_MAIN")
      .map((response:Response)=>
      {
        <NewsItem[]>response.json()
      })
      .catch((error:any)=>
      Observable.throw(error.json().error || "Server Error"));

}


  getNewsItemById(newsItemId: number): Observable<NewsItem>
  {
    return this.http.get("http://localhost:54099/news/getNewsItemById/" + newsItemId).
    map((response:Response)=>
    {
      return <NewsItem>response.json();
  
    }).catch((error:Response | any) =>
    {
      console.log(error.message || error)
      return Observable.throw(error.message || error);
    })
  }





 deleteNewsItem(newsItemId: number):Observable<string>
 {
  return this.http.delete("http://localhost:54099/news/deleteNewsItem/"+newsItemId)
  .map(this.deleteNewsItemResponse)
  .catch(this.deleteNewsItemError);
 } 

private deleteNewsItemResponse(response: Response)
{
  return response.json();
}


private deleteNewsItemError(error:Response | any)
{
  return Observable.throw(error.message | error);
}





getCustomNewsItems():Observable<NewsItem[]>
{

return this.http.get("http://localhost:54099/news/getCustomFeeds").map(this.customNewsItemsResponse).catch(this.customNewsItemsError);

}


private customNewsItemsResponse(response:Response)
{
  return <NewsItem[]>response.json();

}

private customNewsItemsError (error:Response | any)
{
  return Observable.throw(error.message || error);
}


  addNewsItem(newsItem: NewsItem): Observable<NewsItem>
  {
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});

    return this.http.post('http://localhost:54099/news/addNewsItem',newsItem,options).map(this.extractData).catch(this.handleErrorObservable);

  }


  private extractData(response: Response)
  {
    let body = response.json();
    return body.data || {};
  }

  private handleErrorObservable(error:Response | any)
  {
      console.log(error.message || error);
      return Observable.throw(error.message || error);
  }





}





