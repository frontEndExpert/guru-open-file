import { Injectable } from '@angular/core';

import * as _ from 'underscore';

@Injectable()
export class Pagerservice {
      getPager(totalLines: number, currentPage: number = 1 ) {
          // calculate total pages
          let startPage: number, endPage: number, totalPages: number;
          let pageSize: number = 3;

          if (totalLines >= pageSize) {
                totalPages = Math.ceil(totalLines / pageSize);
          }
          else {
              totalPages = 1;
          }
           startPage = 1;
           endPage = totalPages;

          // calculate start and end item indexes
          let startIndex = (currentPage - 1) * pageSize;
          let endIndex = Math.min(startIndex + pageSize - 1, totalLines - 1);
  
          // create an array of pages to ng-repeat in the pager control
          let pages = _.range(startPage, endPage + 1);

        // create an array of lines per page
       // let pages = _.range(startIndex, endIndex + 1);

  
          // return object with all pager properties required by the view
          return {
              totalLines: totalLines,
              currentPage: currentPage,
              pageSize: pageSize,
              totalPages: totalPages,
              startPage: startPage,
              endPage: endPage,
              startIndex: startIndex,
              endIndex: endIndex,
              pages: pages
          };
      }
  }

        //  let startPage: number, endPage: number;
        //   if (totalPages <= 10) {
        //       // less than 10 total pages so show all
        //       startPage = 1;
        //       endPage = totalPages;
        //   } else {
        //       // more than 10 total pages so calculate start and end pages
        //       if (currentPage <= 6) {
        //           startPage = 1;
        //           endPage = 10;
        //       } else if (currentPage + 4 >= totalPages) {
        //           startPage = totalPages - 9;
        //           endPage = totalPages;
        //       } else {
        //           startPage = currentPage - 5;
        //           endPage = currentPage + 4;
        //       }
        //   }
  