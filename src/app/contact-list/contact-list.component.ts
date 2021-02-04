import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactData } from '../state/contact.model';
import { AppState } from '../state/contact.reducer';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})

export class ContactListComponent implements OnInit {
  toggleBtn: any = {};
  contactData$: Observable<Array<ContactData>>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.contactData$ = this.store.select(store => store.contact); 
  }
}
