import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { StoreTestModule } from './store-test/store-test.module';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    StoreTestModule,
  ],
  providers: [],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
