import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { TableComponent } from './table/table.component';
import { AddDataButtonComponent } from './add-data-button/add-data-button.component';
import { FitnessDataService } from './fitness-data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    TableComponent,
    AddDataButtonComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [FitnessDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
