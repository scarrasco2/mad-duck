import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mad-duck-mad-duck-capture',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './mad-duck-capture.component.html',
  styleUrl: './mad-duck-capture.component.css',
})
export class MadDuckCaptureComponent implements OnInit {
  @Input() flagName = 'Mad Duck';
  isLoading = false;
  private route = inject(ActivatedRoute);
  onClick() {
    this.isLoading = true;
  }
  ngOnInit(): void {
    this.flagName = this.route.snapshot.url[0].path;
  }
}
