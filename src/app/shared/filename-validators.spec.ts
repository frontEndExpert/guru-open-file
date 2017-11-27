import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfileComponent } from '../readfile/readfile.component';
import { ReadfileFormComponent } from '../readfile/readfile-form.component';
import { HttpModule }	  from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { FilenameValidator } from './filename-validator';

describe('FilenameValidator', () => {
  let component: FilenameValidator;
  let fixture: ComponentFixture<FilenameValidator>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilenameValidator ],
      imports: [FormsModule, ReactiveFormsModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilenameValidator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a valid filename', () => {
      spyOn(component,'notValidFileName') ;
      component.notValidFileName('abc.txt')
      expect(component.notValidFileName).toBe(true);
  })
  
});
