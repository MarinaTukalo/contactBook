import * as Action from './contact.actions';
import {ContactData} from './contact.model';

export interface AppState{
    contact: Array<ContactData>;
}

export const initialState: Array<ContactData> = [];

export function ContactReducer(
    state = initialState, 
    action: Action.ContactAction)
    {
    switch(action.type){
        case Action.ADD_DATA:
            console.log(action.type, action.payload);
            return [...state, action.payload];
        default:
            return state = initialState;
    }
}