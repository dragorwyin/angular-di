import { FactoryProvider, Injector } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config/config.token';
import { Reporter } from '../reporter/reporter';
import { REPORTERS } from '../reporter/reporter.token';
import { ExperimentalLoggerService } from './experimental-logger.service';
import { LoggerService } from './logger.service';

// Working example for experimental: false, but it's not best practise.

export const LoggerProvider: FactoryProvider = {
  provide: LoggerService,
  useFactory: (reporters: readonly Reporter[], config: AppConfig) => {
    return config.experimentalEnabled
      ? new ExperimentalLoggerService(reporters)
      : new LoggerService();
  },
  deps: [REPORTERS, APP_CONFIG],
};

// Not working for experimental: true, but it's best practise.
// It's not working because LoggerService is depending on himself.
// export const LoggerProvider: FactoryProvider = {
//   provide: LoggerService,
//   useFactory: (injector: Injector) => {
//     return injector.get(APP_CONFIG).experimentalEnabled
//     ? injector.get(ExperimentalLoggerService)
//     : injector.get(LoggerService);
//   },
//   deps: [Injector],
// };

// It's working in lazy because injector.get(LoggerService) has initialized instance of LoggerService and can use it.
export const loggerFactory = (injector: Injector) => {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
};
