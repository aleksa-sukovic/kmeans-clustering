import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './Components/App/app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';
import { DetailsComponent } from './Components/Details/details.component';
import { NavigationComponent } from './Components/Navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/DataService';
import { DataSetFactory } from './Factories/DataSetFactory';
import { SelectDataset } from './Components/SelectDataSet/select.dataset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlgorithmConfigComponent } from './Components/AlgorithmConfig/algorithm.config.component';
import { AlgorithmFactory } from './Factories/AlgorithmFactory';
import { AlgorithmPlaybackComponent } from './Components/AlgorithmPlayback/algorithm.playback.component';
import { AlgorithmDisplayComponent } from './Components/AlgorithmDisplay/algorithm.display.component';
import { DimensionReductionService } from './Services/DimensionReductionService';
import { AlgorithmDisplayConfigComponent } from './Components/AlgorithmDisplayConfig/algorithm.display.config.component';
import ColorGenerator from './Services/ColorGenerator';
import PositionGenerator from './Services/PositionGenerator';

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
    AlgorithmConfigComponent,
    AlgorithmPlaybackComponent,
    AlgorithmDisplayComponent,
    AlgorithmDisplayConfigComponent
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
      AlgorithmFactory,
      DimensionReductionService,
      ColorGenerator,
      PositionGenerator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
