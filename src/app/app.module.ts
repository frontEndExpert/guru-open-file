import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { AboutComponent } from './about/about.component';
import { ReadfileComponent } from './readfile/readfile.component';
import { Fileinfo } from './readfile/fileinfo';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ReadfileService } from './readfile/readfile.service';
import { Pagerservice } from './readfile/pager.service';
import { ReadfileFormComponent } from './readfile/readfile-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReadfileComponent,
    NotFoundComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ReadfileFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ReadfileService,Pagerservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
