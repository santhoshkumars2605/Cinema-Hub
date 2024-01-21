import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingfilterComponent } from './settingfilter.component';

describe('SettingfilterComponent', () => {
  let component: SettingfilterComponent;
  let fixture: ComponentFixture<SettingfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingfilterComponent]
    });
    fixture = TestBed.createComponent(SettingfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
