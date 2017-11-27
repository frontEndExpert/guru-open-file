import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfileFormComponent } from './readfile-form.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { Router, ActivatedRoute }                from '@angular/router';
import { HttpModule, Response, Headers, RequestOptions }	  from '@angular/http';
import { ReadfileService   } from './readfile.service';
import { FilenameValidator } from '../shared/filename-validator';

describe('ReadfileFormComponent', () => {
  let component: ReadfileFormComponent;
  let fixture: ComponentFixture<ReadfileFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfileFormComponent,
                    ],
      providers: [ReadfileService],
      imports: [FormsModule, ReactiveFormsModule,HttpModule
        ]
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

