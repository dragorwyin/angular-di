import { Component, Injector, OnInit } from '@angular/core';
import { loggerFactory } from './logger/logger-provider';
import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [Injector],
      multi: true,
    },
    {
      provide: LoggerService,
      useClass: LoggerService,
      multi: true,
    },
  ],
})
export class AppComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    console.log(this.logger);
    this.logger.log('blah');
  }

  click() {}
}
