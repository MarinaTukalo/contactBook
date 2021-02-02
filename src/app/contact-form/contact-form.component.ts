import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 as uuid } from 'uuid';
import { AddDataAction } from '../state/contact.actions';
import { ContactData } from '../state/contact.model';
import { AppState } from '../state/contact.reducer';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  newContactData: ContactData = {id:'',fname:'',lname:'',phone:'',email:'',address:''};

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addData(){
    this.newContactData.id = uuid();
    this.store.dispatch(new AddDataAction(this.newContactData));
    this.newContactData = {id:'',fname:'',lname:'',phone:'',email:'',address:''};
  }

}
