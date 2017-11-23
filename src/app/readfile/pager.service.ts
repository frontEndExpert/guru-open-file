import { Injectable } from '@angular/core';

import * as _ from 'underscore';

@Injectable()
export class Pagerservice {
    pageSize: string = "10";

      //getPager(totalLines: number, currentPage: number = 1 ) {
        getPager(totalLines: number,totalPages: number, currentPage: number ) {    
          // calculate total pages
          //let startPage: number, endPage: number, totalPages: number;
          let startPage: number, endPage: number;
          let pagesize = Number(this.pageSize);

           startPage = 1;
           endPage = totalPages;

          // calculate start and end item indexes
          let startIndex = (currentPage - 1) * pagesize;
          let endIndex = Math.min(startIndex + pagesize - 1, totalLines - 1);
  
          // create an array of pages to ng-repeat in the pager control
        // let pages = _.range(startPage, endPage + 1);

        // create an array of lines per page
        let pages = _.range(startIndex, endIndex + 1);

  
          // return object with all pager properties required by the view
          return {
              totalLines: totalLines,
              currentPage: currentPage,
              pagesize: pagesize,
              totalPages: totalPages,
              startPage: startPage,
              endPage: endPage,
              startIndex: startIndex,
              endIndex: endIndex,
              pages: pages
          };
      }
  }

  