import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  public onClick;
  constructor(private router:Router) { }

  newsSources:Object[]=[
    {
      source:"Times Of India",
      description:"Description",
      icon:"dashboard"
    },
     {
      source:"Tech Crunch",
      description:"Description",
      icon:"dashboard"
    }

  ];

  ngOnInit() {
  }

  goToRSSFeeds():void
  {
    
      this.router.navigate(['news-dashboard']);
  }

  goToAddCustomFeeds():void
  {
      this.router.navigate(['/add-news']);
  }



}
