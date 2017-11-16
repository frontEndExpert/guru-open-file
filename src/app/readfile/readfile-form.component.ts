import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; 
import { Router, ActivatedRoute }                from '@angular/router';

import { ReadfileService   } from './readfile.service';
import { FilenameValidator } from '../shared/filename-validator';

@Component({
  selector: 'app-readfile-form',
  templateUrl: './readfile-form.component.html',
  styleUrls: ['./readfile-form.component.css']
})

export class ReadfileFormComponent {
  rform: FormGroup;
  filename: string = '';
  post:any;

  @Output() msgEvent = new EventEmitter<string>();

  //filenameForm = new FormGroup ({
  //  fname: new FormControl()
  //});

  constructor(
    //fb: FormBuilder,
    private fb: FormBuilder,
    private _readfileService: ReadfileService
  ) {
  // this.rform = new FormGroup()
    this.rform = fb.group({
      fname: ['', Validators.compose([Validators.required, Validators.minLength(5), FilenameValidator.notValidFileName])]
      //filename: ,['', Validators.required],
    });
    
  }

  readFile(post){
    this.filename = post.fname;
    this.msgEvent.emit(this.filename)

  }

}
