import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MadDuckCaptureComponent } from './mad-duck-capture.component';

@Component({
  standalone: true,
  imports: [RouterModule, MadDuckCaptureComponent],
  selector: 'mad-duck-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
