import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InsightComponent } from './insight/insight.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { IdeateComponent } from './ideate/ideate.component';
import { TestComponent } from './test/test.component';
import { FinalThoughtsComponent } from './final-thoughts/final-thoughts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InsightComponent,
    HomeComponent,
    DesignComponent,
    IdeateComponent,
    TestComponent,
    FinalThoughtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
