import { Injectable, Injector } from '@angular/core';
import { APP_CONFIG } from '../../config/config.token';

import { Logger } from '../../logger/logger';
import { loggerFactory } from '../../logger/logger-provider';

@Injectable({
  providedIn: 'root',
  useFactory: loggerFactory,
  deps: [Injector],
})
export class LazyServiceService implements Logger {
  prefix = 'lazy';

  constructor() {}

  log(message: string) {
    console.log(`${this.prefix} lazy: ${message}`);
  }
}
