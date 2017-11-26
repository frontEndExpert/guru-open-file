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
export class ReadfileComponent {
  allItems: any[];
  pageinfo: {} = Fileinfo;
  errorMessage: string;
//  mode = "Observable";
  pageLines: string;
  fileName: string;
  pageno: string = "1";

constructor(  private fileService: ReadfileService ) { }

    
    //smallfile.txt/page/1 loading file page data from the json API
    // API does not include file path.
    loadpages(){
      this.fileService.getFiles(this.fileName, this.pageno)
              .subscribe( allItems => 
                { this.pageinfo = allItems;
                  this.pageLines = allItems['content'];
                error => this.errorMessage = <any>error // set items to json response
                });

      console.log('this.fileName=' + this.fileName +" p=" + this.pageno);
    }

    //adding 2 strings as numbers with unary oporator;
    sum(num1, num2): number{
      return +num1 + +num2;
    }
    // function to transfer data from child component form
     loadpage2($event){
      this.fileName = $event;
      this.pageno = "1";
      this.loadpages();
    }
    // function to control the page displayed. load new page.
    setPage(page: number) {
        this.pageno = String(page);
        this.loadpages();
        this.pageLines = this.pageinfo['content'];
     }
}

