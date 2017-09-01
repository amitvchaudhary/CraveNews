import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsDashboardComponent} from './news-dashboard/news-dashboard.component';
import {AddNewsComponent} from './add-news/add-news.component';





const routes: Routes=[
    {path:'', redirectTo:'/news-dashboard', pathMatch:'full'},
    {path:'news-dashboard', component:NewsDashboardComponent},
    {path:'add-news',component:AddNewsComponent}


]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
