import { Component, OnInit } from '@angular/core';
import { LoggerProvider } from './logger/logger-provider';
import { LoggerService } from './logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggerProvider],
})
export class AppComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log('blah');
  }

  click() {
    this.logger.log('clicked');
  }
}
