import { Component, OnInit, Input } from '@angular/core';
//import { ActivatedRoute, Params } from '@angular/router';
import { Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import * as _ from 'underscore';

import { ReadfileService } from './readfile.service';
import { Fileinfo } from './fileinfo';
import { ReadfileFormComponent } from './readfile-form.component';


@Component({
  selector: 'app-readfile',
  templateUrl: './readfile.component.html',
  styleUrls: ['./readfile.component.css'],
  providers: [ReadfileService]
})
export class ReadfileComponent implements OnInit{
  allItems: any[];
  pageinfo: {} = Fileinfo;
  errorMessage: string;
  mode = "Observable";
  
    // pager object
  //pager: any = {};
  one = "1";
  pageLines: string;
  pagedItems: any[];
  linesInPage: string[];

  fileName: string = "largefile.txt";
  pageno: string = "1";

constructor(  private fileService: ReadfileService ) { }

    ngOnInit() {
      this.loadpages(); 
    }
    //smallfile.txt/page/1
    loadpages(){
      this.fileService.getFiles(this.fileName, this.pageno)
              .subscribe( allItems => 
                { this.pageinfo = allItems;
                  this.pageLines = allItems['content'];
                error => this.errorMessage = <any>error // set items to json response
                });

      console.log('this.fileName=' + this.fileName +" p=" + this.pageno);
    }
    //form_filename;

    sum(num1, num2): number{
      return +num1 + +num2;
    }

     loadpage2($event){
      this.fileName = $event;
      this.pageno = "1";
      this.loadpages();
    }
/*    
    loadpage(filename: string){
      //console.log("fn=" + this.pageno);
      this.fileName = filename;
      this.loadpages();
    } */

    setPage(page: number) {
        this.pageno = String(page);
        this.loadpages();
        this.pageLines = this.pageinfo['content'];
     }
}

