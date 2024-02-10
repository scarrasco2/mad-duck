import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MadDuckCaptureComponent } from './mad-duck-capture.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MadDuckCaptureComponent],
  selector: 'mad-duck-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mad-duck';
}
