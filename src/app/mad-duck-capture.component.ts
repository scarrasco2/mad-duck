import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mad-duck-capture',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [TitleCasePipe],
  templateUrl: './mad-duck-capture.component.html',
  styleUrl: './mad-duck-capture.component.css',
})
export class MadDuckCaptureComponent implements OnInit {
  @Input() flagName = '';
  isLoading = false;
  route = inject(ActivatedRoute);
  title = inject(Title);
  toTitleCase = inject(TitleCasePipe);

  onClick() {
    this.isLoading = true;
  }

  ngOnInit(): void {
    this.flagName = this.route.snapshot.url[0].path;
    this.title.setTitle(
      `Operation Mad Duck | ${this.toTitleCase.transform(this.flagName)} Flag`
    );
  }
}
