import { Action } from '@ngrx/store';
import { ContactData } from './contact.model';

export const ADD_DATA = '[CONTACT] Add Data';

export class AddDataAction implements Action{
    readonly type = ADD_DATA;
    constructor(public payload:ContactData){
    }
}

export type ContactAction = AddDataAction;