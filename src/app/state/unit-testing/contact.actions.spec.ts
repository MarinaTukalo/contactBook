import { ADD_DATA, AddDataAction, LoadDataAction, LOAD_DATA } from '../contact.actions';
import { ContactData } from '../contact.model';

describe('State > Action ', ()=>{
    it('should create a LoadDataAction', ()=>{
        const action = new LoadDataAction();
        expect(action.type).toEqual(LOAD_DATA);
    });

    it('should create an AddDataAction containing a payload',()=>{
        const payload: ContactData = {
            id:'1',fname:'John',lname:'Doe',phone:'+43 123 123',email:'test@mail.com',address:'Test'
        };
        const action = new AddDataAction(payload);
        
        expect({...action}).toEqual({
            type:ADD_DATA, payload
        });
    });
});