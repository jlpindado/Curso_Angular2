import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdinComponent } from './formdin.component';

describe('FormdinComponent', () => {
  let component: FormdinComponent;
  let fixture: ComponentFixture<FormdinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormdinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
