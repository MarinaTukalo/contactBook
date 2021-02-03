import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ],
      imports: [StoreModule.forRoot({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an h2 tag', () => {
    const h2Tag = fixture.debugElement.query(By.css('h2'));
    const h2HtmlElement: HTMLHeadElement = h2Tag.nativeElement;
    expect(h2HtmlElement.textContent).toBe('Contact form');
  });

  it('should be minimum one button on the page', () =>{
    const allBtn = fixture.debugElement.queryAll(By.css('button'));
    expect(allBtn.length>=1).toBeTruthy();
  });

  it('should be only one contact form', () => {
    const contactForm = fixture.debugElement.queryAll(By.css('form'));
    expect(contactForm.length).toBe(1);
  });
});
