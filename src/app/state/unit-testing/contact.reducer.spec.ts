import * as fromReducer from '../contact.reducer';
import * as fromActions from '../contact.actions';
import { ContactData } from '../contact.model';

describe('State > Reducer',()=>{
     it('should load data', ()=>{
         
        const { initialState } = fromReducer;
        const payload: Array<ContactData> =[
                {
                    id:'1',fname:'Test_1',lname:'Test_1',phone:'0123',email:'test_1@mail.com',address:'Vienna'
                }
            ];
    
        const action = new fromActions.AddDataAction(payload[0]);
        const state = fromReducer.ContactReducer(initialState, action);
        expect(state).toEqual(payload);
    });
});