import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
