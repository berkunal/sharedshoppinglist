import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewShoppingListDialogComponent } from './add-new-shopping-list-dialog.component';

describe('AddNewShoppingListDialogComponent', () => {
  let component: AddNewShoppingListDialogComponent;
  let fixture: ComponentFixture<AddNewShoppingListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewShoppingListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewShoppingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
