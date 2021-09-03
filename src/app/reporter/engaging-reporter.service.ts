import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class EngagingReporterService implements Reporter {
  constructor() {}

  counter = 0;

  report(): void {
    this.counter += 1;
    console.log(`
      Engaging report: User has been using app ... seconds
      It was called ${this.counter} time.
    `);
  }
}
