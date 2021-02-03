import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ContactReducer } from '../state/contact.reducer';

import { ContactListComponent } from './contact-list.component';
import { By } from '@angular/platform-browser';

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponent ],
      imports: [
        StoreModule.forRoot({
          contact: ContactReducer,
        })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as a title 'Contact list'`, () => {
    const title = fixture.debugElement.query(By.css('h2'));
    const titleHtmlElement: HTMLHeadElement = title.nativeElement;
    expect(titleHtmlElement.textContent).toEqual('Contact list');
  });
});
