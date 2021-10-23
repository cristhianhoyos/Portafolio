import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDownloadcvComponent } from './icon-downloadcv.component';

describe('IconDownloadcvComponent', () => {
  let component: IconDownloadcvComponent;
  let fixture: ComponentFixture<IconDownloadcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDownloadcvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDownloadcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
