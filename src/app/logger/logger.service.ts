import { Injectable } from '@angular/core';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  prefix = 'root';

  constructor() {}

  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
