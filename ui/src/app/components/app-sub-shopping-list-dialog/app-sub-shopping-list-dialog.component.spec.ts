import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSubShoppingListDialogComponent } from './app-sub-shopping-list-dialog.component';

describe('AppSubShoppingListDialogComponent', () => {
  let component: AppSubShoppingListDialogComponent;
  let fixture: ComponentFixture<AppSubShoppingListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSubShoppingListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSubShoppingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
