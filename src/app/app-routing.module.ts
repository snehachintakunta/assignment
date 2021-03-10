import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { SecondcontentComponent } from './components/secondcontent/secondcontent.component';

const routes: Routes = [
  {
    path:'content',
    component: ContentComponent
  },
  {
    path:'secondcontent',
    component: SecondcontentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
