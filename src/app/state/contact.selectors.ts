import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './contact.reducer';

const getContactStatus = createFeatureSelector<fromReducer.AppState>(
    fromReducer.contactFeatureKey
);

export const selectContactList = createSelector(
    getContactStatus, AppState => AppState.contact
);