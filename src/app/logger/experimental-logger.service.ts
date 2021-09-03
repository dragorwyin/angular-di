import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config/config.token';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  prefix = 'root';

  constructor() {}

  log(message: string): void {
    console.log(`${this.prefix} experimental: ${message}`);
  }
}
