import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFrameComponent } from './chat-frame.component';

describe('ChatFrameComponent', () => {
  let component: ChatFrameComponent;
  let fixture: ComponentFixture<ChatFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
