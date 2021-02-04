import { Action } from '@ngrx/store';
import { ContactData } from './contact.model';

export const LOAD_DATA = '[CONTACT] Load Data';

export const ADD_DATA = '[CONTACT] Add Data';

export class LoadDataAction implements Action{
    readonly type = LOAD_DATA;
}

export class AddDataAction implements Action{
    readonly type = ADD_DATA;
    constructor(public payload: ContactData){
    }
}

export type ContactAction = LoadDataAction | AddDataAction;