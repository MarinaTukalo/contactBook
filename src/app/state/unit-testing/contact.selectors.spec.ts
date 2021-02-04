import { AppState } from '../contact.reducer';
import { selectContacts } from '../contact.selectors';

describe('State > Selectors', ()=>{
    const initialState: AppState={
        contact: [
            {
                id:'1',fname:'Test_1',lname:'Test_1',phone:'0123',email:'test_1@mail.com',address:'Vienna'
            },
            {
                id:'2',fname:'Test_2',lname:'Test_2',phone:'0321',email:'test_2@mail.com',address:'Brussel'
            }
        ]
    };

    it("should select the contact list",()=>{
        const result = selectContacts.projector(initialState.contact);
        expect(result.length).toEqual(2);
        expect(result[1].id).toEqual('2');
    });
});


