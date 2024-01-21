import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviefilterComponent } from './moviefilter.component';

describe('MoviefilterComponent', () => {
  let component: MoviefilterComponent;
  let fixture: ComponentFixture<MoviefilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviefilterComponent]
    });
    fixture = TestBed.createComponent(MoviefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
