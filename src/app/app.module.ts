import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { HelperService } from './quill/quill.service';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';

import { MySearchPipe } from './pipes/search.pipe';
import { PagePipe } from './pipes/page.pipe';
import { ShowOncePipe } from './pipes/show-once.pipe';
import { ViewPipe } from './pipes/view.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MySearchPipe,
    PagePipe,
    RowComponent,
    ShowOncePipe,
    ViewPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    VirtualScrollerModule,
  ],
  providers: [
    HelperService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
