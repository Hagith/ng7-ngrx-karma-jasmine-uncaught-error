import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { getListCount, State } from './store-test.reducer';

@Component({
  selector: 'app-store-test',
  templateUrl: './store-test.component.html',
  styleUrls: ['./store-test.component.scss'],
})
export class StoreTestComponent implements OnInit {

  listCount$: Observable<number>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    // throw new Error('foo');
    this.listCount$ = this.store.pipe(
      select(getListCount),
      // catchError((e, caught) => {
      //   console.log(e, caught);
      //   return caught;
      // }),
      // tap((v) => console.log(v)),
    );
  }

}
