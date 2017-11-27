import { async,inject, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadfileComponent } from './readfile.component';
import { ReadfileFormComponent } from './readfile-form.component';
import { ReadfileService } from './readfile.service';
import { HttpModule }	  from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


fdescribe('ReadfileComponent', () => {
  let component: ReadfileComponent;
  let fixture: ComponentFixture<ReadfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadfileComponent,ReadfileFormComponent ],
      imports: [FormsModule, ReactiveFormsModule,HttpModule],
      providers: [ReadfileService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testing the funtion to go to next page 1 + 1 = 11 need to use unary +"1" + +"1"= 2
  fit('should add 2 strings as numbers', () => {
    expect(component.sum("1","1")).toBe(2);
  });
  

  fit('no filename return 404', async(inject( [ReadfileService], ( ReadfileService ) => {
    ReadfileService.getFiles().subscribe(result => expect(result['status']).toBe(404)); 
})));

fit('filename return status 200', async(inject( [ReadfileService], ( ReadfileService ) => {
  ReadfileService.getFiles("file.txt",1).subscribe(result => expect(result['status']).toBe(200)); 
})));

});
