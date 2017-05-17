import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcrawlerComponent } from './webcrawler.component';

describe('WebcrawlerComponent', () => {
  let component: WebcrawlerComponent;
  let fixture: ComponentFixture<WebcrawlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebcrawlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcrawlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
