import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserReporterService } from './reporter/browser-reporter.service';
import { EngagingReporterService } from './reporter/engaging-reporter.service';
import { REPORTERS } from './reporter/reporter.token';
import { Comp1Component } from './views/lazy/comp1/comp1.component';
import { Comp2Component } from './views/lazy/comp2/comp2.component';

@NgModule({
  declarations: [AppComponent, Comp1Component, Comp2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
