import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

import { NodesListComponent } from './nodes-list/nodes-list.component';
import { NodeCardComponent } from './node-card/node-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NodesListComponent,
    NodeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdbPopoverModule,
    MdbFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
