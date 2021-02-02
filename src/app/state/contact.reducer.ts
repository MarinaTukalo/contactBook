import * as Action from './contact.actions';
import {ContactData} from './contact.model';

export interface AppState{
    contact: Array<ContactData>;
}

export const initialState: Array<ContactData> = [];

export const contactFeatureKey = 'contact';

export function ContactReducer(state: Array<ContactData>, action: Action.ContactAction){
    switch(action.type){
        case Action.ADD_DATA:
            console.log(action.type, action.payload);
            return [...state, action.payload];
        default:
            return state = initialState;
    }
}