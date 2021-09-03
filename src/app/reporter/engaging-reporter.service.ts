import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class EngagingReporterService implements Reporter {
  constructor() {}

  report(): void {
    // counter ...
    console.log('Engaging report: User has been using app ... seconds');
  }
}
