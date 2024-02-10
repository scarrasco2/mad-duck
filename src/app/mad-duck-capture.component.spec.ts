import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MadDuckCaptureComponent } from './mad-duck-capture.component';

describe('MadDuckCaptureComponent', () => {
  let component: MadDuckCaptureComponent;
  let fixture: ComponentFixture<MadDuckCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadDuckCaptureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MadDuckCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
