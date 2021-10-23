import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLinkedComponent } from './icon-linked.component';

describe('IconLinkedComponent', () => {
  let component: IconLinkedComponent;
  let fixture: ComponentFixture<IconLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLinkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
