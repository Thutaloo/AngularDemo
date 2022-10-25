import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonAssignmentComponent } from './list-button-assignment.component';

describe('ListButtonAssignmentComponent', () => {
  let component: ListButtonAssignmentComponent;
  let fixture: ComponentFixture<ListButtonAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListButtonAssignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListButtonAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
