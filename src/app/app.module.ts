import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { AboutComponent } from './about/about.component';
import { ReadfileComponent } from './readfile/readfile.component';
import { Fileinfo } from './readfile/fileinfo';

import { ReadfileService } from './readfile/readfile.service';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginationComponent } from './readfile/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReadfileComponent,
    NotFoundComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpModule
  ],
  providers: [ReadfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
