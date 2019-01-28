import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreTestComponent } from './store-test.component';
import { reducer } from './store-test.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('store-test', reducer),
  ],
  exports: [StoreTestComponent],
  declarations: [StoreTestComponent],
})
export class StoreTestModule {}
