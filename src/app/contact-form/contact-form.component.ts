import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddDataAction } from '../state/contact.actions';
import { ContactData } from '../state/contact.model';
import { AppState } from '../state/contact.reducer';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactData: Observable<Array<ContactData>>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.contactData = this.store.select(store => store.contact); 
    setTimeout(()=> this.addData(), 2000);
  }

  addData(){
    this.store.dispatch(new AddDataAction({id:'0',fname:'John',lname:'Doe',phone:'+43 12 34 56',email:'john@test.com',address:'Vienna Test str.1'}));
  }

}
