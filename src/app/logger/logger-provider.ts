import { FactoryProvider, Injector } from '@angular/core';
import { APP_CONFIG } from '../config/config.token';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

// Not best practise because of possibility to change imports order or even deps array.

// export const LoggerProvider: FactoryProvider = {
//   provide: LoggerService,
//   useFactory: (config: AppConfig) => {
//     return config.experimentalEnabled
//       ? new ExperimentalLoggerService()
//       : new LoggerService();
//   },
//   deps: [APP_CONFIG],
// };

export const loggerFactory = (injector: Injector) => {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
};

export const LoggerProvider: FactoryProvider = {
  provide: LoggerService,
  useFactory: loggerFactory,
  deps: [Injector],
};
