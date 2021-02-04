import { createSelector } from '@ngrx/store';
import { ContactData } from './contact.model';
import { AppState } from './contact.reducer';

export const selectContacts = createSelector(
    (state:AppState) => state.contact,
    (contact: Array<ContactData>) => contact
    );
