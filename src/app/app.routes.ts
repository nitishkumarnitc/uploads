
import {Routes, RouterModule, CanActivate} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AddTopicComponent} from "./add-topic/add-topic.component";
import {AddConceptComponent} from "./add-concept/add-concept.component";
import {AddProblemComponent} from "./add-problem/add-problem.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {TopicsComponent} from "./topics/topics.component";
import {ChaptersComponent} from "./chapters/chapters.component";
import {Authentication} from "./service/authentication";
/**
 * Created by nitish on 7/2/17.
 */


export const router:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',pathMatch:'full',component:HomeComponent, canActivate:[Authentication]},
  {path:'login',component:LoginComponent},
  {path:'topic',component:AddTopicComponent,canActivate:[Authentication]},
  {path:'concept',component:AddConceptComponent, canActivate:[Authentication]},
  {path:'problem',component:AddProblemComponent,canActivate:[Authentication]},
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);
