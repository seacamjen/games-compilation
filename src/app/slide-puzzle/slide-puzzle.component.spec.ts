import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePuzzleComponent } from './slide-puzzle.component';

describe('SlidePuzzleComponent', () => {
  let component: SlidePuzzleComponent;
  let fixture: ComponentFixture<SlidePuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
