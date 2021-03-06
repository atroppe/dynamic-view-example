import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewComponent } from './view/view.component';
import { SelectViewComponent } from './view/select-view/select-view.component';
import { DynamicViewComponent } from './dynamic-view/dynamic-view.component';
import { TextViewComponent } from './view/text-view/text-view.component';
import { DateViewComponent } from './view/date-view/date-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';
import { DynamicViewDirective } from './dynamic-view.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { ViewLayoutComponent } from './layouts/view-layout/view-layout.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ContactViewComponent } from './view/contact-view/contact-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SelectViewComponent,
    DynamicViewComponent,
    TextViewComponent,
    DateViewComponent,
    FormErrorComponent,
    DynamicViewDirective,
    PageNotFoundComponent,
    HomeComponent,
    LayoutComponent,
    ViewLayoutComponent,
    ClientInfoComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
