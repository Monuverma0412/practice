import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
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
import { Comp1Component } from './httpClient2/comp1/comp1.component';
import { Comp2Component } from './httpClient2/comp2/comp2.component';
import { Comp3Component } from './httpClient2/comp3/comp3.component';
import { Comp4Component } from './httpClient2/comp4/comp4.component';
import { CompComponent } from './httpClient2/comp/comp.component';
import { TestingComponent } from './testing/testing.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "table", component: TableComponent },
  { path: "app", component: AppComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "child", component: ChildComponent },
  { path: "parent", component: ParentComponent },
  { path: "one", component: OneComponent },
  { path: "two", component: TwoComponent },
  { path: "serviceparent", component: ServiceparentComponent },
  { path: "servicechildd", component: ServicechilddComponent },
  { path: "get", component: GetComponent },
  { path: "post", component: PostComponent },
  { path: "delete", component: DeleteComponent },
  { path: "put", component: PutComponent },
  { path: "api", component: ApiComponent },
  { path: "comp1", component: Comp1Component },
  { path: "comp2", component: Comp2Component },
  { path: "comp3", component: Comp3Component },
  { path: "comp4", component: Comp4Component },
  { path:"comp",component:CompComponent},
  {path:"testing",component:TestingComponent},
  {path:"accountForm",component:AccountFormComponent},
  {path:"forms",component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
