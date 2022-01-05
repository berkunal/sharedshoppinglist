import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListContentDialogComponent } from './shopping-list-content-dialog.component';

describe('ShoppingListContentDialogComponent', () => {
  let component: ShoppingListContentDialogComponent;
  let fixture: ComponentFixture<ShoppingListContentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListContentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListContentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
