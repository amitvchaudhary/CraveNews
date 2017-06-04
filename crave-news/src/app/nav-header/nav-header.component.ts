import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor() { }

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

}
