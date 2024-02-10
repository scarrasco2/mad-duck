import { Route } from '@angular/router';
import { MadDuckCaptureComponent } from './mad-duck-capture.component';

export const appRoutes: Route[] = [
  { path: '**', component: MadDuckCaptureComponent },
];
