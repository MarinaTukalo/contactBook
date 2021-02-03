import { ADD_DATA, AddDataAction } from './contact.actions';
import { ContactData } from './contact.model';

describe('Action ',()=>{
    it('should create an AddDataAction',()=>{
        const payload: ContactData = {
            id:'1',fname:'John',lname:'Doe',phone:'+43 123 123',email:'test@mail.com',address:'Test'
        };
        const action = new AddDataAction(payload);
        expect({...action}).toEqual({type:ADD_DATA, payload});
    })
})