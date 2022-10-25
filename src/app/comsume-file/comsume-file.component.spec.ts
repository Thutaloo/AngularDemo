import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComsumeFileComponent } from './comsume-file.component';

describe('ComsumeFileComponent', () => {
  let component: ComsumeFileComponent;
  let fixture: ComponentFixture<ComsumeFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComsumeFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComsumeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
