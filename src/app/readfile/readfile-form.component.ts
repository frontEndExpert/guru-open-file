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

  // sending filename to the parent component/view
  @Output() msgEvent = new EventEmitter<string>();


  constructor(
    //fb: FormBuilder,
    private fb: FormBuilder,
    private _readfileService: ReadfileService
  ) {  }

  ngOnInit() {
// declaring the form inputs and validations
    this.rform = this.fb.group({
      fname: ['', Validators.compose([Validators.required, Validators.minLength(5), FilenameValidator.notValidFileName])]
    });
  }

  onKey(event:any){
    console.log(String(event));
    this.rform.controls['fname'].updateValueAndValidity();
    if (this.rform.valid){this.readFile(this.rform.value)}
  }

  // function to proccess the form 
  readFile(post){
    this.filename = post.fname;
    this.msgEvent.emit(this.filename)

  }

}
