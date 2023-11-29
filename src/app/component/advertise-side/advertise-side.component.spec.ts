import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertiseSideComponent } from './advertise-side.component';

describe('AdvertiseSideComponent', () => {
  let component: AdvertiseSideComponent;
  let fixture: ComponentFixture<AdvertiseSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertiseSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertiseSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
