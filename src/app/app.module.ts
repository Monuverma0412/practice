import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ServiceparentComponent } from './serviceparent/serviceparent.component';
import { ServicechilddComponent } from './servicechildd/servicechildd.component';
import { GetComponent } from './httpClient2/get/get.component';
import { PostComponent } from './httpClient2/post/post.component';
import { DeleteComponent } from './httpClient2/delete/delete.component';
import { PutComponent } from './httpClient2/put/put.component';
import { ApiComponent } from './httpClient2/api/api.component';
import { HoverDirective } from './hover.directive';
import { Comp1Component } from './httpClient2/comp1/comp1.component';
import { Comp2Component } from './httpClient2/comp2/comp2.component';
import { Comp3Component } from './httpClient2/comp3/comp3.component';
import { Comp4Component } from './httpClient2/comp4/comp4.component';
import { CompComponent } from './httpClient2/comp/comp.component';
import { HomeModule } from './home/home.module';
import { LocaledatePipe } from './localedate.pipe';
import { TestingComponent } from './testing/testing.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    ChildComponent,
    ParentComponent,
    OneComponent,
    TwoComponent,
    ServiceparentComponent,
    ServicechilddComponent,
    GetComponent,
    PutComponent,
    DeleteComponent,
    PostComponent,
    ApiComponent,
    HoverDirective,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    CompComponent,
    LocaledatePipe,
    TestingComponent,
    AccountFormComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    CommonModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
