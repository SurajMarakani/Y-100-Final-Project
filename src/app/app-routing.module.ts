import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsightComponent } from './insight/insight.component'
import { DesignComponent } from './design/design.component'
import { IdeateComponent } from './ideate/ideate.component'
import { TestComponent } from './test/test.component'
import { FinalThoughtsComponent } from './final-thoughts/final-thoughts.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'insight', component: InsightComponent },
  { path: 'design', component: DesignComponent },
  { path: 'ideate', component: IdeateComponent},
  { path: 'test', component: TestComponent },
  { path: 'final', component: FinalThoughtsComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
