import { Component, OnInit, Input } from '@angular/core';
//import { ActivatedRoute, Params } from '@angular/router';
import { Response, Headers, RequestOptions } from '@angular/http';
import { FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import * as _ from 'underscore';

import { Pagerservice } from './pager.service';
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

  constructor(  private fileService: ReadfileService,
    private pagerService: Pagerservice
  ) { }

  private allItems: any[];
    // pager object
  pager: any = {};
    // paged items
  allpages: string[];
  pagedItems: any[];
  linesInPage: string[];

  fileName: string = "largefile.txt";
  pageno: string = "1";

    ngOnInit() {
          this.loadpages();
    }
    //smallfile.txt/page/1
    loadpages(){
      this.fileService.getFiles(this.fileName, this.pageno)
              .subscribe(allpages => {
              this.allItems = allpages; // set items to json response
              this.setPage(1); // initialize to page 1
      });
    }
    //form_filename;

    loadpage2($event){
      this.fileName = $event;
      this.pageno = "1";
      this.loadpages();
    }
    loadpage(filename: string){
      //console.log("fn=" + this.pageno);
      this.fileName = filename;
      this.loadpages();
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems['content'].length, page);
        // get current page of items    
        this.linesInPage = this.allItems['content'].slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.pagedItems = this.pager.pages.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}

