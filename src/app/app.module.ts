import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellowordComponent } from './helloword/helloword.component';
import { HttpClientModule } from '@angular/common/http';

import { PostService } from './shared/post.service';



@NgModule({
  declarations: [
    AppComponent,
    HellowordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
