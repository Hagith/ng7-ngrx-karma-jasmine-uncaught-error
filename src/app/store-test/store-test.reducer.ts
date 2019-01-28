import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  list: any[];
}

export const initialState: State = {
  list: ['a'],
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}

export const getState = createFeatureSelector<State>('store-test');

export const getList = createSelector(getState, (state) => state.list);

export const getListCount = createSelector(getList, (list) => list.length);
