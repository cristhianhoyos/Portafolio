import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSendEmailComponent } from './icon-send-email.component';

describe('IconSendEmailComponent', () => {
  let component: IconSendEmailComponent;
  let fixture: ComponentFixture<IconSendEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSendEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSendEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
