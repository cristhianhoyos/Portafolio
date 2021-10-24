import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeaderBarComponent } from './menu-header-bar.component';

describe('MenuHeaderBarComponent', () => {
  let component: MenuHeaderBarComponent;
  let fixture: ComponentFixture<MenuHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHeaderBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
