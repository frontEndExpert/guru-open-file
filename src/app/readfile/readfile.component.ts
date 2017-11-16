import { Component, OnInit, Input } from '@angular/core';
//import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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

  constructor(private _http: Http,
    private fileService: ReadfileService,
    private pagerService: Pagerservice
  ) { }

  //file1: Fileinfo = new Fileinfo(200,"largefile.txt","20",80,["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Donec accumsan arcu sagittis eros tempus, non maximus sem laoreet.","Nulla blandit lacus blandit cursus porttitor.","Vivamus sit amet velit rutrum, consectetur arcu vel, placerat nunc.","Cras finibus velit eget augue dapibus, vitae semper quam aliquam.","Fusce et tellus condimentum, malesuada dolor quis, tincidunt sapien.","Vestibulum pulvinar urna venenatis rutrum placerat.","Maecenas eget augue ut eros fermentum ultrices nec ac nibh.","Curabitur nec nisl nec enim fringilla sollicitudin.","Nulla tincidunt sem sed ex imperdiet, et ultricies libero aliquam."]);
  //file_content: string[]; // = this.file1.content
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
      //console.log("fn=" + this.pageno);
      this.fileService.getFiles(this.fileName, this.pageno)
      //this._http.get('../read-file/fileName/largefile.txt/page/20')
      //         .map((response: Response) => response.json())
      //    .map(res => res.json())   
              .subscribe(allpages => {
              this.allItems = allpages; // set items to json response
              this.setPage(1); // initialize to page 1
      });
    }
    //form_filename;

    loadpage2($event){
      this.fileName = $event;
      this.loadpages();
    }
    loadpage(filename: string){
      //console.log("fn=" + this.pageno);
      this.fileName = filename;
      this.loadpages();
    }
      //this.fileService.getFiles(this.fileName, this.pageno)
      //this._http.get('../read-file/fileName/largefile.txt/page/20')
      //         .map((response: Response) => response.json())
      //    .map(res => res.json())   
         //     .subscribe(allpages => {
        //      this.allItems = allpages; // set items to json response
       //       this.setPage(1); // initialize to page 1
     // });
    //}
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems['content'].length, page);
        // get current page of items
        //this.pagedItems = this.pager.pages;     
        this.linesInPage = this.allItems['content'].slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.pagedItems = this.pager.pages.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

  //  openFile(){
//
   // }
}

