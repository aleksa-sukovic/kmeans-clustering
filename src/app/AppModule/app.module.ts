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
import { SelectDataset } from './Components/SelectDataSet/select.dataset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlgorithmConfigComponent } from './Components/AlgorithmControl/algorithm.config.component';
import { AlgorithmFactory } from './Factories/AlgorithmFactory';

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
    NavigationComponent,
    SelectDataset,
    AlgorithmConfigComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
      DataService,
      DataSetFactory,
      AlgorithmFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
