import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyMorePipe } from './myMore.pipe';
import { MoreComponent } from './components/more/more.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyMorePipe,
    MoreComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
