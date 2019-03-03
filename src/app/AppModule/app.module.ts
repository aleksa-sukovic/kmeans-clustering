import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/App/app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { DetailsComponent } from './Components/Details/details.component';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/Data/DataService';
import { DataSetFactory } from './Factories/DataSetFactory';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'details', component: DetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [
      DataService,
      DataSetFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
