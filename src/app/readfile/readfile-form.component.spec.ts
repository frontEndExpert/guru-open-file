import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfileFormComponent } from './readfile-form.component';

describe('ReadfileFormComponent', () => {
  let component: ReadfileFormComponent;
  let fixture: ComponentFixture<ReadfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfileFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
