import { Component, OnInit, Input } from '@angular/core';
//import { ActivatedRoute, Params } from '@angular/router';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Rx';

import { ReadfileService } from './readfile.service';
import { Fileinfo } from './fileinfo';


@Component({
  selector: 'app-readfile',
  templateUrl: './readfile.component.html',
  styleUrls: ['./readfile.component.css'],
  providers: [ReadfileService]
})
export class ReadfileComponent{

  file1: Fileinfo = new Fileinfo(200,"largefile.txt","20",80,["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Donec accumsan arcu sagittis eros tempus, non maximus sem laoreet.","Nulla blandit lacus blandit cursus porttitor.","Vivamus sit amet velit rutrum, consectetur arcu vel, placerat nunc.","Cras finibus velit eget augue dapibus, vitae semper quam aliquam.","Fusce et tellus condimentum, malesuada dolor quis, tincidunt sapien.","Vestibulum pulvinar urna venenatis rutrum placerat.","Maecenas eget augue ut eros fermentum ultrices nec ac nibh.","Curabitur nec nisl nec enim fringilla sollicitudin.","Nulla tincidunt sem sed ex imperdiet, et ultricies libero aliquam."])
  file_content = this.file1.content
  //("status":200,"fileName":"largefile.txt","page":"20","totalPage":80,"content":["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Donec accumsan arcu sagittis eros tempus, non maximus sem laoreet.","Nulla blandit lacus blandit cursus porttitor.","Vivamus sit amet velit rutrum, consectetur arcu vel, placerat nunc.","Cras finibus velit eget augue dapibus, vitae semper quam aliquam.","Fusce et tellus condimentum, malesuada dolor quis, tincidunt sapien.","Vestibulum pulvinar urna venenatis rutrum placerat.","Maecenas eget augue ut eros fermentum ultrices nec ac nibh.","Curabitur nec nisl nec enim fringilla sollicitudin.","Nulla tincidunt sem sed ex imperdiet, et ultricies libero aliquam."])
/*
  fileInfo: Fileinfo[];
  errorMassage: string;
  mode = "Observable";

  postsLoading;
  file_content = [];
  status;
  fileName;
  pageno: number = 1;
  PageSize = 10;
  totalpages;
  error;

  constructor(
    private http: Http,
		private fileService: ReadfileService,
		private route: ActivatedRoute
  ) { }

ngOnInit() {
  let timer = Observable.timer(0, 5000);
  timer.subscribe(() => this.openFile());
}

openFile(){
  this.fileService.getFile(fileName, page)
  .subscribe(
    fileInfo => this.fileInfo = fileInfo,
    error => this.errorMassage = <any>error
  );
}
/*
  @Input()
	fileinfo: Fileinfo;
  
  ngOnInit() {
    this.loadFile(this.fileName, this.pageno); 
  }

  
  private loadFile(fileName, page?){
    this.postsLoading = true; 
    //post_id post_id?
    this.fileService.getFile(fileName, page)
    .subscribe(
            fileinfo => {
                //this.file_content = fileinfo.content;
                this.status = fileinfo.content;
                this.fileName = fileinfo.fileName;
                this.pageno = fileinfo.page;
                this.totalpages = fileinfo.totalpage;
                this.error = fileinfo.error;

                this.file_content = _.take(fileinfo.content, this.PageSize);
            },
            null,
            () => { this.postsLoading = false; });
  }

  ngOnInit(): void {
		let FileRequest = this.route.params
				.flatMap((params: Params) =>
					this.fileService.getFile(params['filename'],+params['pageno']));
          FileRequest.subscribe(response => this.fileinfo = response.json());
	}
*/


}
